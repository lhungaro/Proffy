using System;

namespace Freela_API.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public int Ranking { get; set; }
        public string DurationTime { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
