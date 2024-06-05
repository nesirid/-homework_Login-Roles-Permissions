namespace CourseManagement.Models
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Icon { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
