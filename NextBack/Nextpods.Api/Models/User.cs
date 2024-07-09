using AspNetCore.Identity.MongoDbCore.Models;
using MongoDbGenericRepository.Attributes;

[CollectionName("users")]
public class User : MongoIdentityUser<Guid>
{
}