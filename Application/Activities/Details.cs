using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Activity>
        {
            private DataContext context;
            public Handler(DataContext Context)
            {
                this.context = Context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await this.context.Activities.FindAsync(request.Id);
            }
        }
    }
}