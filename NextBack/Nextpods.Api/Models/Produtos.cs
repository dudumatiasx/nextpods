using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Nextpods.Models
{
    public class Produto
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = null!;

        [BsonElement("modelo")]
        public string Modelo { get; set; } = null!;

        [BsonElement("preco")]
        public double Preco { get; set; }

        [BsonElement("sabores")]
        public Dictionary<string, Sabor> Sabores { get; set; } = new Dictionary<string, Sabor>();
    }

    public class Sabor
    {
        [BsonElement("sabor")]
        public string Nome { get; set; } = null!;

        [BsonElement("quantidade")]
        public long Quantidade { get; set; }
    }
}
