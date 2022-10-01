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
    public class PaymenttypesController : ControllerBase
    {
        private readonly QPDatabaseContext _context;

        public PaymenttypesController(QPDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Paymenttypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paymenttype>>> GetPaymenttypes()
        {
            return await _context.Paymenttypes.ToListAsync();
        }

        // GET: api/Paymenttypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Paymenttype>> GetPaymenttype(string id)
        {
            var paymenttype = await _context.Paymenttypes.FindAsync(id);

            if (paymenttype == null)
            {
                return NotFound();
            }

            return paymenttype;
        }

        // PUT: api/Paymenttypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymenttype(string id, Paymenttype paymenttype)
        {
            if (id != paymenttype.Id)
            {
                return BadRequest();
            }

            _context.Entry(paymenttype).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymenttypeExists(id))
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

        // POST: api/Paymenttypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Paymenttype>> PostPaymenttype(Paymenttype paymenttype)
        {
            _context.Paymenttypes.Add(paymenttype);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (PaymenttypeExists(paymenttype.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetPaymenttype", new { id = paymenttype.Id }, paymenttype);
        }

        // DELETE: api/Paymenttypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaymenttype(string id)
        {
            var paymenttype = await _context.Paymenttypes.FindAsync(id);
            if (paymenttype == null)
            {
                return NotFound();
            }

            _context.Paymenttypes.Remove(paymenttype);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaymenttypeExists(string id)
        {
            return _context.Paymenttypes.Any(e => e.Id == id);
        }
    }
}
