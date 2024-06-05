using CourseManagement.Models;
using CourseManagement.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseManagement.ViewComponents
{
    [ViewComponent(Name = "HeaderViewComponent")]
    public class HeaderViewComponent : ViewComponent
    {
        private readonly ISettingService _settingService;
        private readonly IHttpContextAccessor _accessor;
        private readonly UserManager<AppUser> _userManager;

        public HeaderViewComponent(ISettingService settingService,
                                   IHttpContextAccessor accessor,
                                   UserManager<AppUser> userManager)
        {
            _settingService = settingService;
            _accessor = accessor;
            _userManager = userManager;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            AppUser user = new();

            if (User.Identity.Name != null)
            {
                user = await _userManager.FindByNameAsync(User.Identity.Name);
            }

            List<BasketVM> basketDatas = new();
            if (_accessor.HttpContext.Request.Cookies["basket"] != null)
            {
                basketDatas = JsonConvert.DeserializeObject<List<BasketVM>>(_accessor.HttpContext.Request.Cookies["basket"]);
            }

            Dictionary<string, string> settings = await _settingService.GetAllAsync();

            HeaderVM response = new()
            {
                Settings = settings,
                BasketCount = basketDatas.Sum(m => m.Count),
                BasketTotalPrice = basketDatas.Sum(m => m.Count * m.Price),
                UserFullName = user.FullName
            };

            return View(response);
        }
    }

    public class HeaderVM
    {
        public int BasketCount { get; set; }
        public decimal BasketTotalPrice { get; set; }
        public Dictionary<string, string> Settings { get; set; }
        public string UserFullName { get; set; }
    }

    public class BasketVM
    {
        public int Count { get; set; }
        public decimal Price { get; set; }
    }


}
