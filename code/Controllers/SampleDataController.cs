using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularJSWebApiEmpty.Controllers
{
    public class SampleDataController : ApiController
    {
        // GET api/<controller>
        public string Get()
        {
            System.Threading.Thread.Sleep(1500);

            return "Joe Blow";
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            //fake doing work for a half a second.
            
            throw new NotImplementedException("This method is not implemented");
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}