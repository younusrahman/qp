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
    public class DeliverytypesController : ControllerBase
    {
        private readonly QPDatabaseContext _context;

        public DeliverytypesController(QPDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Deliverytypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Deliverytype>>> GetDeliverytypes()
        {
            return await _context.Deliverytypes.ToListAsync();
        }

        // GET: api/Deliverytypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Deliverytype>> GetDeliverytype(string id)
        {
            var deliverytype = await _context.Deliverytypes.FindAsync(id);

            if (deliverytype == null)
            {
                return NotFound();
            }

            return deliverytype;
        }

        // PUT: api/Deliverytypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDeliverytype(string id, Deliverytype deliverytype)
        {
            if (id != deliverytype.Id)
            {
                return BadRequest();
            }

            _context.Entry(deliverytype).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DeliverytypeExists(id))
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

        // POST: api/Deliverytypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Deliverytype>> PostDeliverytype(Deliverytype deliverytype)
        {
            _context.Deliverytypes.Add(deliverytype);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DeliverytypeExists(deliverytype.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDeliverytype", new { id = deliverytype.Id }, deliverytype);
        }

        // DELETE: api/Deliverytypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDeliverytype(string id)
        {
            var deliverytype = await _context.Deliverytypes.FindAsync(id);
            if (deliverytype == null)
            {
                return NotFound();
            }

            _context.Deliverytypes.Remove(deliverytype);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DeliverytypeExists(string id)
        {
            return _context.Deliverytypes.Any(e => e.Id == id);
        }
    }
}
