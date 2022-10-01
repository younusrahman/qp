using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QPServer.Model;

namespace QPServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeliverysuppliersController : ControllerBase
    {
        private readonly QPDatabaseContext _context;

        public DeliverysuppliersController(QPDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Deliverysuppliers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Deliverysupplier>>> GetDeliverysuppliers()
        {
            return await _context.Deliverysuppliers.ToListAsync();
        }

        // GET: api/Deliverysuppliers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Deliverysupplier>> GetDeliverysupplier(string id)
        {
            var deliverysupplier = await _context.Deliverysuppliers.FindAsync(id);

            if (deliverysupplier == null)
            {
                return NotFound();
            }

            return deliverysupplier;
        }

        // PUT: api/Deliverysuppliers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeliverysupplier(string id, Deliverysupplier deliverysupplier)
        {
            if (id != deliverysupplier.Id)
            {
                return BadRequest();
            }

            _context.Entry(deliverysupplier).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeliverysupplierExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Deliverysuppliers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Deliverysupplier>> PostDeliverysupplier(Deliverysupplier deliverysupplier)
        {
            _context.Deliverysuppliers.Add(deliverysupplier);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DeliverysupplierExists(deliverysupplier.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDeliverysupplier", new { id = deliverysupplier.Id }, deliverysupplier);
        }

        // DELETE: api/Deliverysuppliers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeliverysupplier(string id)
        {
            var deliverysupplier = await _context.Deliverysuppliers.FindAsync(id);
            if (deliverysupplier == null)
            {
                return NotFound();
            }

            _context.Deliverysuppliers.Remove(deliverysupplier);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeliverysupplierExists(string id)
        {
            return _context.Deliverysuppliers.Any(e => e.Id == id);
        }
    }
}
