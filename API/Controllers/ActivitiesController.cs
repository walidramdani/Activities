using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext context;
        public ActivitiesController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Activity>>>GetActivities()
        {
        return await this.context.Activities.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>>GetActivities(Guid id)
        {
            return await this.context.Activities.FindAsync(id);
        }

    }
}