export default {
  async fetch(request, env) {
    return await handleRequest(request)
  }
}

async function handleRequest(request) {
 let result = await fetch(`https://api.npms.io/v2/search?q=react`);
 let response = await result.json();
 let packegeNames = response.results.map(res => {
  return {
    name : res.package.name,
    version : res.package.version,
    description : res.package.description,
    link : res.package.links.npm,
    repo : res.package.links.repository
  }

  // return res.package;
  
 })


  return new Response(JSON.stringify(packegeNames), {
    headers:{
      'Content-type':'application/json'
    }
  });
}