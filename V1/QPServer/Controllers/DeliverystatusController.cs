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
    public class DeliverystatusController : ControllerBase
    {
        private readonly QPDatabaseContext _context;

        public DeliverystatusController(QPDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Deliverystatus
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Deliverystatus>>> GetDeliverystatuses()
        {
            return await _context.Deliverystatuses.ToListAsync();
        }

        // GET: api/Deliverystatus/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Deliverystatus>> GetDeliverystatus(string id)
        {
            var deliverystatus = await _context.Deliverystatuses.FindAsync(id);

            if (deliverystatus == null)
            {
                return NotFound();
            }

            return deliverystatus;
        }

        // PUT: api/Deliverystatus/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeliverystatus(string id, Deliverystatus deliverystatus)
        {
            if (id != deliverystatus.Id)
            {
                return BadRequest();
            }

            _context.Entry(deliverystatus).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeliverystatusExists(id))
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

        // POST: api/Deliverystatus
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Deliverystatus>> PostDeliverystatus(Deliverystatus deliverystatus)
        {
            _context.Deliverystatuses.Add(deliverystatus);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DeliverystatusExists(deliverystatus.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDeliverystatus", new { id = deliverystatus.Id }, deliverystatus);
        }

        // DELETE: api/Deliverystatus/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeliverystatus(string id)
        {
            var deliverystatus = await _context.Deliverystatuses.FindAsync(id);
            if (deliverystatus == null)
            {
                return NotFound();
            }

            _context.Deliverystatuses.Remove(deliverystatus);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeliverystatusExists(string id)
        {
            return _context.Deliverystatuses.Any(e => e.Id == id);
        }
    }
}
