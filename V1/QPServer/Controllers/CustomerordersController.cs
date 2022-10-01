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
    public class CustomerordersController : ControllerBase
    {
        private readonly QPDatabaseContext _context;

        public CustomerordersController(QPDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Customerorders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customerorder>>> GetCustomerorders()
        {
            return await _context.Customerorders.ToListAsync();
        }

        // GET: api/Customerorders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customerorder>> GetCustomerorder(string id)
        {
            var customerorder = await _context.Customerorders.FindAsync(id);

            if (customerorder == null)
            {
                return NotFound();
            }

            return customerorder;
        }

        // PUT: api/Customerorders/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerorder(string id, Customerorder customerorder)
        {
            if (id != customerorder.Id)
            {
                return BadRequest();
            }

            _context.Entry(customerorder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerorderExists(id))
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

        // POST: api/Customerorders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Customerorder>> PostCustomerorder(Customerorder customerorder)
        {
            _context.Customerorders.Add(customerorder);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CustomerorderExists(customerorder.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCustomerorder", new { id = customerorder.Id }, customerorder);
        }

        // DELETE: api/Customerorders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomerorder(string id)
        {
            var customerorder = await _context.Customerorders.FindAsync(id);
            if (customerorder == null)
            {
                return NotFound();
            }

            _context.Customerorders.Remove(customerorder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomerorderExists(string id)
        {
            return _context.Customerorders.Any(e => e.Id == id);
        }
    }
}
