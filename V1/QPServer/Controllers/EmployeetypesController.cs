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
    public class EmployeetypesController : ControllerBase
    {
        private readonly QPDatabaseContext _context;

        public EmployeetypesController(QPDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Employeetypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employeetype>>> GetEmployeetypes()
        {
            return await _context.Employeetypes.ToListAsync();
        }

        // GET: api/Employeetypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employeetype>> GetEmployeetype(string id)
        {
            var employeetype = await _context.Employeetypes.FindAsync(id);

            if (employeetype == null)
            {
                return NotFound();
            }

            return employeetype;
        }

        // PUT: api/Employeetypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeetype(string id, Employeetype employeetype)
        {
            if (id != employeetype.Id)
            {
                return BadRequest();
            }

            _context.Entry(employeetype).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeetypeExists(id))
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

        // POST: api/Employeetypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Employeetype>> PostEmployeetype(Employeetype employeetype)
        {
            _context.Employeetypes.Add(employeetype);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmployeetypeExists(employeetype.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmployeetype", new { id = employeetype.Id }, employeetype);
        }

        // DELETE: api/Employeetypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmployeetype(string id)
        {
            var employeetype = await _context.Employeetypes.FindAsync(id);
            if (employeetype == null)
            {
                return NotFound();
            }

            _context.Employeetypes.Remove(employeetype);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmployeetypeExists(string id)
        {
            return _context.Employeetypes.Any(e => e.Id == id);
        }
    }
}
