var V2Ray = "SOCKS5 127.0.0.1:12346; SOCKS 127.0.0.1:12346; DIRECT;";

var domains = [
    	"startpage.com",
	"vpngate.net",
	"greatfire.org",
	"tox.im",
	"proxifier.com",
	"dnscrypt.org",
	"atgfw.org",
	"chinagfw.org",
	"whatismyip.com",
	"goagentplus.com",
	"shadowsocks.org",
	"falcop.com",
	"getlantern.org",
	"furbo.org",
	"goagentx.com",
	"github.com",
	"sourceforge.net",
	"torproject.org",
	"hideme.io",
	"mozilla.org",
	"shadowx.work",
	"v2ray.com",
	"astrill.com",
    	"pornhub.com",
    	"botanwang.com",
    	"tunsafe.com",
    	"koolproxy.io",
    	"reddit.com",
   	"wireguard.com",
   	"f-droid.org",
   	"archive.org",
   	"sanmin.com.tw",
	"asuscomm.com",

	//Design
	"deviantart.com",

	"disqus.com",
	"disquscdn.com",
	"tumblr.com",
	"flickr.com",
	"imgur.com",

	"evozi.com",
	"live.com",
	"1drv.com",
	"evernote.com",

	//blog
	"wp.com",
	"yam.com",
	"ashchan.com",
	"zuckclub.com",
	"blogspot.com",
	"blogspot.jp",
	"zalex2014.tk",
	"coreygilmore.com",
	"wordpress.com",
	"blogimg.jp",
	"leaskh.com",
	"blogger.com",
	"hexo.io",
	"medium.com",

	//GeneralNews
	"rfi.my",
	"rfi.fr",
	"washingtonpost.com",
	"tmagazine.com",
	"nytimes.com",
	"nytimg.com",
	"imrworldwide.com",
	"rankingsandreviews.com",
	"usnews.com",
	"bbc.co.uk",
	"bbci.co.uk",
	"bbc.com",
	"on-match.com",
	"solidot.org",
    	"ntdtv.com",
    	"hk01.com",
    	"economist.com",
    	"cw.com.tw",
    	"tagesschau.de",


	//TechNews
	"engadget.com",
    	"wired.com",
    	"techcrunch.com",
    	"venturebeat.com",

	//Network
	"amazonaws.com",
	"fastly.net",
	"akamaihd.net",
	"blogsmithmedia.com",
	"bit.ly",
	"d.pr",
	"ow.ly",
	"ift.tt",
	"nateparrott.com",
	"stacksocial.com",
	"feedly.com",
	"acgtea.com",

	//academy and develop
	"ieee.org",
	"mathoverflow.net",
	"tex.stackexchange.com",
	"academia.edu",
	"geogebra.org",
	"golang.org",
	"netspeak.org",
	"endreslab.com",
    	"pecny.cz",
    	"trree.org",
    	"plot.ly",
    	"preining.infoi",
    	"nature.comi",
	"android.com",

	//Universities
	"illinois.edu",
	"berkeley.edu",
	"wisc.edu",
	"cmu.edu",
	"rochester.edu",
	"purdue.edu",
	"technolutions.net",


	"netflix.com",

	//Online Dictionary
	"ldoceonline.com",
	"freedicts.com",

	//Softwares
	"formacx.com",
	"trionworlds.com",
	"line.me",

	//otaku
	"e-hentai.org",
	"nhentai.net",
	"nicovideo.jp",
	"nimg.jp",
	"pixnet.net",
	"fc2.com",
	"nyaatorrents.org",
	"nyaa.se",
	"share.dmhy.org",
	"loli.us",

	//facebook
	"facebook.net",
	"instagram.com",
	"facebook.com",
	"fb.me",
	"cdninstagram.com",
	"fbcdn.net",

	"booth.pm",

	"telegram.org",
	"telegram.me",

	"wikipedia.org",
	"pixiv.net",
	"twitch.tv",

	//Twitter
	"twitter.com",
	"t.co",
	"twimg.com",

	//Google
	"gmail.com",
	"googlemail.com",
	"mailchimp.com",
	"mail-archive.com",
	"google.com",
	"goo.gl",
	"google.com.hk",
	"google.com.tw",
	"google.co.jp",
	"googlecode.com",
	"googleapis.com",
	"ggpht.com",
	"youtube.com",
	"youtu.be",
	"ytimg.com",
	"youtube-nocookie.com",
	"googlevideo.com",
	"sketchup.com",
	"gstatic.com",
	"google-analytics.com",
	"googleusercontent.com",
	"chrome.com",
	"g.co",
	"googledrive.com",
	"googletagmanager.com",
	"googleadservices.com",
	"abc.xyz",

	//Dropbox
	"dropbox.com",
	"dropboxusercontent.com",
	"dropboxwiki.com",

	//iTuens
	"mzstatic.com",
	"itunes.apple.com",

	//cdn
	"cloudfront.net",
	"colwiz.com",
    	"trello.com",


        //2019-07 add
        "saowen.com",
        "jplovetv.com",
        "jetbrains.com",

        //2019-08 add
        "slideshare.net",
        "googleblog.com",
        "oneplus.com",
        "arcgis.com",
        "blogspot.tw",
        "whatsapp.com",
        "theguardian.com",
        "books.com.tw",
        "kknews.cc",
        "storm.mg",
        "oraclecloud.com", 
        "ft.com",
        "paiwadang.com",
        "camerarepair.com",
        "godaddy.com",
        "ifixit.com",

        //201910 add
        "archive.org",
        "matters.news",
];

function FindProxyForURL(url, host) {
    for (var i = domains.length - 1; i >= 0; i--) {
    	if (dnsDomainIs(host, domains[i])) {
    		return V2Ray
    	};
    };
    return "DIRECT";
}
