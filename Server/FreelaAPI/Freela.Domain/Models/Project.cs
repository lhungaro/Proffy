using System;

namespace Freela.Domain.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public int Ranking { get; set; }
        public string Area { get; set; }
        public string DurationTime { get; set; }
        public DateTime CreateDate { get; set; }
        public Company Company { get; set; }
        public IEnumerable<UserProject> UserProjects { get; set; }

    }
}
