using MongoDB.Driver;
using Nextpods.Models;

namespace Nextpods.Services
{
    public class ProdutoService
    {
        private readonly IMongoCollection<Produto> _produtos;

        public ProdutoService(IMongoDatabase database)
        {
            _produtos = database.GetCollection<Produto>("produtos");
        }

        public async Task<List<Produto>> GetAsync() =>
            await _produtos.Find(_ => true).ToListAsync();

        public async Task<Produto?> GetAsync(string id) =>
            await _produtos.Find(p => p.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Produto produto) =>
            await _produtos.InsertOneAsync(produto);

        public async Task UpdateAsync(string id, Produto produto) =>
            await _produtos.ReplaceOneAsync(p => p.Id == id, produto);

        public async Task RemoveAsync(string id) =>
            await _produtos.DeleteOneAsync(p => p.Id == id);
    }
}
