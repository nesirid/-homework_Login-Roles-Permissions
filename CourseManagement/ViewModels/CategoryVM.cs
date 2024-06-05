﻿using Microsoft.AspNetCore.Http;

namespace CourseManagement.ViewModels
{
    public class CategoryVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public IFormFile IconFile { get; set; }

    }
}
