using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace ChatApp2.Controllers
{
    [ApiController]
    [Route ("api/[controller]")]

    public class usersController: ControllerBase
    {
        public string[] users = new string[0];

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(users);
        }


        [HttpPost]
        public IActionResult Post(JObject payload)
        {
     
            return Ok(payload);

        }
    }
}
