var mockups = [
  'primary'
];
var ready = [];

var items = [{"price": "0.99", "imageurl": ["http://thumbs4.ebaystatic.com/pict/1905685240834040_1.jpg"], "title": ["AC Adapter Charger for HP/Compaq NC6000 nc6220 nx6110"]}, {"price": "0.99", "imageurl": ["http://thumbs3.ebaystatic.com/pict/3903410297424040_1.jpg"], "title": ["NEW AC Power Adapter Charger for Gateway adp-90sb bb"]}, {"price": "0.99", "imageurl": ["http://thumbs4.ebaystatic.com/pict/1807138375994040_1.jpg"], "title": ["Dock Cradle Apple iPhone 4 G 4G Docking Station Black"]}, {"price": "0.99", "imageurl": ["http://thumbs4.ebaystatic.com/pict/3207478156954040_1.jpg"], "title": ["Arch Rivals  (Nintendo, 1990) Tested"]}, {"price": "0.99", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1207670707054040_1.jpg"], "title": ["Harbor Freight Coupon Non-Contact Laser Thermometer"]}, {"price": "1.0", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1405958776654040_1.jpg"], "title": ["Black Luster Soldier Ultra Rare 1st Edition"]}, {"price": "1.0", "imageurl": ["http://thumbs2.ebaystatic.com/pict/2208385499694040_1.jpg"], "title": ["Family Circle Magazine - February 2011"]}, {"price": "1.0", "imageurl": ["http://thumbs1.ebaystatic.com/pict/2208385498084040_1.jpg"], "title": ["Family Circle Magazine - June 2011"]}, {"price": "1.0", "imageurl": ["http://thumbs2.ebaystatic.com/pict/2208385499694040_1.jpg"], "title": ["Family Circle Magazine - February 2011"]}, {"price": "1.0", "imageurl": ["http://thumbs1.ebaystatic.com/pict/2208385498084040_1.jpg"], "title": ["Family Circle Magazine - June 2011"]}, {"price": "1.01", "imageurl": ["http://thumbs4.ebaystatic.com/pict/1207670790834040_1.jpg"], "title": ["Blizzard's Diablo II Official Strategy Guide "]}, {"price": "1.09", "imageurl": ["http://thumbs3.ebaystatic.com/pict/2306633202384040_1.jpg"], "title": ["Air Hockey Puck Pusher Handles Set Table 75mm Goalies"]}, {"price": "1.1", "imageurl": ["http://thumbs3.ebaystatic.com/pict/3005910517664040_1.jpg"], "title": ["Tail Of A Whale Sofa or Wall Quilt Pattern"]}, {"price": "1.1", "imageurl": ["http://thumbs2.ebaystatic.com/pict/3005910510574040_1.jpg"], "title": ["Replenished Sofa Quilt Pattern"]}, {"price": "1.1", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1207670752254040_1.jpg"], "title": ["The God of the Bible and Other Gods: Is the Christia..."]}, {"price": "1.2", "imageurl": ["http://thumbs3.ebaystatic.com/pict/1405958777944040_1.jpg"], "title": ["Womens sleep shirt size L 12/14"]}, {"price": "1.2", "imageurl": ["http://thumbs3.ebaystatic.com/pict/2708044835344040_1.jpg"], "title": ["NEW Battery Charger for Compaq Presario C500 F700 V5000"]}, {"price": "1.29", "imageurl": ["http://thumbs4.ebaystatic.com/pict/2906020527274040_1.jpg"], "title": ["50 AG10 L1131 LR1130 LR54 RW89 KA54 Button Coin Battery"]}, {"price": "1.29", "imageurl": ["http://thumbs3.ebaystatic.com/pict/3306043484824040_1.jpg"], "title": ["Shutter Release Button +Spring for Sony DSC H1 H2 H5"]}, {"price": "1.29", "imageurl": ["http://thumbs4.ebaystatic.com/pict/2906020527274040_1.jpg"], "title": ["50 AG10 L1131 LR1130 LR54 RW89 KA54 Button Coin Battery"]}, {"price": "1.45", "imageurl": ["http://thumbs3.ebaystatic.com/pict/3705366178104040_1.jpg"], "title": ["Battery+Charger for Nikon S210 S220 S230 S500 EN-EL10"]}, {"price": "1.45", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1706854121854040_1.jpg"], "title": ["5 PUBLIX B2G1 FREE Coca-Cola Coupons 6pk/16.9oz. x9/9"]}, {"price": "1.45", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1706854121854040_1.jpg"], "title": ["5 PUBLIX B2G1 FREE Coca-Cola Coupons 6pk/16.9oz. x9/9"]}, {"price": "1.49", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1305657867654040_1.jpg"], "title": ["6 IPHONE 3GS 3G 3rd CLEAR SCREEN PROTECTOR FILM COVER"]}, {"price": "1.49", "imageurl": ["http://thumbs2.ebaystatic.com/pict/2708044824094040_1.jpg"], "title": ["6x Mirror Screen Protector Film for Apple iPhone 3G 3Gs"]}, {"price": "1.49", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1706854114294040_1.jpg"], "title": ["AC Power Adapter Charger for Nintendo DSi & NDSi LL XL"]}, {"price": "1.49", "imageurl": ["http://thumbs4.ebaystatic.com/pict/1207670875074040_1.jpg"], "title": ["10 $1.00/1 IZZE SODA 4-PK BOTTLES COUPONS EXP 09/30/11"]}, {"price": "1.5", "imageurl": ["http://thumbs1.ebaystatic.com/pict/1305657868444040_1.jpg"], "title": ["NEW DUBRO 3MM X 10 SOCKET HEAD CAP SCREWS # 2123 4 PCS"]}];

function displayItems(mockup, item1, item2)
{
  if (item1 == undefined)
    item1 = {
      item: items[Math.floor(Math.random() * items.length)],
      seller: {id: 'Andrew', ratings: {pos: 1, neg: 45392}}
    };
  if (item2 == undefined)
    item2 = item1;
  
  $(document.body).html($.tmpl(mockup, {items: [item1, item2]}));
}

function templateReady(name)
{
  ready.push(name);
  
  if (ready.length == mockups.length)
  {
    var mockup = undefined;
    if (location.hash.length > 1)
      mockup = location.hash.substr(1);
    
    if (mockups.indexOf(mockup) == -1)
      mockup = mockups[Math.floor(Math.random() * mockups.length)];
    
    displayItems(mockup);
  }
}

require(['jquery-1.6.2.min.js'], function()
  {
    require(['jquery.tmpl.min.js'], function()
      {
        $(function()
          {
            $.each(mockups, function (key, name)
              {
                $.get(name + '.tmpl.htm', {}, function (data)
                  {
                    $.template(name, data);
                    templateReady(name);
                  }, 'html')
                .error(function ()
                  {
                    var idx = mockups.indexOf(name);
                    if (idx != -1)
                      mockups.splice(idx, 1);
                  });
              });
          });
      });
  });