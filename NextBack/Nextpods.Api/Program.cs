using MongoDB.Driver;
using Nextpods.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add MongoDB configuration
builder.Services.Configure<MongoDatabaseSettings>(
    builder.Configuration.GetSection(nameof(MongoDatabaseSettings)));

builder.Services.AddSingleton<IMongoClient>(s =>
    new MongoClient(builder.Configuration.GetValue<string>("MongoDatabaseSettings:ConnectionString")));

builder.Services.AddScoped<IMongoDatabase>(s =>
    s.GetRequiredService<IMongoClient>().GetDatabase(builder.Configuration.GetValue<string>("MongoDatabaseSettings:DatabaseName")));

builder.Services.AddScoped<ProdutoService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

// MongoDB Settings class
public class MongoDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;
    public string DatabaseName { get; set; } = null!;
}
