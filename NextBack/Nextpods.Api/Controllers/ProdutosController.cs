using Microsoft.AspNetCore.Mvc;
using Nextpods.Models;
using Nextpods.Services;

namespace Nextpods.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutosController : ControllerBase
    {
        private readonly ProdutoService _produtoService;

        public ProdutosController(ProdutoService produtoService)
        {
            _produtoService = produtoService;
        }

        [HttpGet]
        public async Task<List<Produto>> Get() =>
            await _produtoService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Produto>> Get(string id)
        {
            var produto = await _produtoService.GetAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Produto produto)
        {
            await _produtoService.CreateAsync(produto);

            return CreatedAtAction(nameof(Get), new { id = produto.Id }, produto);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Put(string id, Produto produto)
        {
            var existingProduto = await _produtoService.GetAsync(id);

            if (existingProduto == null)
            {
                return NotFound();
            }

            produto.Id = existingProduto.Id;

            await _produtoService.UpdateAsync(id, produto);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var produto = await _produtoService.GetAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            await _produtoService.RemoveAsync(id);

            return NoContent();
        }
    }
}
