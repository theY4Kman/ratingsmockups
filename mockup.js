var items = [{"price": "0.99", "imageurl": ["http://thumbs4.ebaystatic.com/pict/1905685240834040_1.jpg"], "name": "AC Adapter Charger for HP/Compaq NC6000 nc6220 nx6110"}, {"price": "0.99", "imageurl": ["http://thumbs3.ebaystatic.com/pict/3903410297424040_1.jpg"], "name": "NEW AC Power Adapter Charger for Gateway adp-90sb bb"}, {"price": "0.99", "imageurl": ["http://thumbs4.ebaystatic.com/pict/1807138375994040_1.jpg"], "name": "Dock Cradle Apple iPhone 4 G 4G Docking Station Black"}, {"price": "0.99", "imageurl": ["http://thumbs4.ebaystatic.com/pict/3207478156954040_1.jpg"], "name": "Arch Rivals  (Nintendo, 1990) Tested"}, {"price": "0.99", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1207670707054040_1.jpg"], "name": "Harbor Freight Coupon Non-Contact Laser Thermometer"}, {"price": "1.0", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1405958776654040_1.jpg"], "name": "Black Luster Soldier Ultra Rare 1st Edition"}, {"price": "1.0", "imageurl": ["http://thumbs2.ebaystatic.com/pict/2208385499694040_1.jpg"], "name": "Family Circle Magazine - February 2011"}, {"price": "1.0", "imageurl": ["http://thumbs1.ebaystatic.com/pict/2208385498084040_1.jpg"], "name": "Family Circle Magazine - June 2011"}, {"price": "1.0", "imageurl": ["http://thumbs2.ebaystatic.com/pict/2208385499694040_1.jpg"], "name": "Family Circle Magazine - February 2011"}, {"price": "1.0", "imageurl": ["http://thumbs1.ebaystatic.com/pict/2208385498084040_1.jpg"], "name": "Family Circle Magazine - June 2011"}, {"price": "1.01", "imageurl": ["http://thumbs4.ebaystatic.com/pict/1207670790834040_1.jpg"], "name": "Blizzard's Diablo II Official Strategy Guide "}, {"price": "1.09", "imageurl": ["http://thumbs3.ebaystatic.com/pict/2306633202384040_1.jpg"], "name": "Air Hockey Puck Pusher Handles Set Table 75mm Goalies"}, {"price": "1.1", "imageurl": ["http://thumbs3.ebaystatic.com/pict/3005910517664040_1.jpg"], "name": "Tail Of A Whale Sofa or Wall Quilt Pattern"}, {"price": "1.1", "imageurl": ["http://thumbs2.ebaystatic.com/pict/3005910510574040_1.jpg"], "name": "Replenished Sofa Quilt Pattern"}, {"price": "1.1", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1207670752254040_1.jpg"], "name": "The God of the Bible and Other Gods: Is the Christia..."}, {"price": "1.2", "imageurl": ["http://thumbs3.ebaystatic.com/pict/1405958777944040_1.jpg"], "name": "Womens sleep shirt size L 12/14"}, {"price": "1.2", "imageurl": ["http://thumbs3.ebaystatic.com/pict/2708044835344040_1.jpg"], "name": "NEW Battery Charger for Compaq Presario C500 F700 V5000"}, {"price": "1.29", "imageurl": ["http://thumbs4.ebaystatic.com/pict/2906020527274040_1.jpg"], "name": "50 AG10 L1131 LR1130 LR54 RW89 KA54 Button Coin Battery"}, {"price": "1.29", "imageurl": ["http://thumbs3.ebaystatic.com/pict/3306043484824040_1.jpg"], "name": "Shutter Release Button +Spring for Sony DSC H1 H2 H5"}, {"price": "1.29", "imageurl": ["http://thumbs4.ebaystatic.com/pict/2906020527274040_1.jpg"], "name": "50 AG10 L1131 LR1130 LR54 RW89 KA54 Button Coin Battery"}, {"price": "1.45", "imageurl": ["http://thumbs3.ebaystatic.com/pict/3705366178104040_1.jpg"], "name": "Battery+Charger for Nikon S210 S220 S230 S500 EN-EL10"}, {"price": "1.45", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1706854121854040_1.jpg"], "name": "5 PUBLIX B2G1 FREE Coca-Cola Coupons 6pk/16.9oz. x9/9"}, {"price": "1.45", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1706854121854040_1.jpg"], "name": "5 PUBLIX B2G1 FREE Coca-Cola Coupons 6pk/16.9oz. x9/9"}, {"price": "1.49", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1305657867654040_1.jpg"], "name": "6 IPHONE 3GS 3G 3rd CLEAR SCREEN PROTECTOR FILM COVER"}, {"price": "1.49", "imageurl": ["http://thumbs2.ebaystatic.com/pict/2708044824094040_1.jpg"], "name": "6x Mirror Screen Protector Film for Apple iPhone 3G 3Gs"}, {"price": "1.49", "imageurl": ["http://thumbs2.ebaystatic.com/pict/1706854114294040_1.jpg"], "name": "AC Power Adapter Charger for Nintendo DSi & NDSi LL XL"}, {"price": "1.49", "imageurl": ["http://thumbs4.ebaystatic.com/pict/1207670875074040_1.jpg"], "name": "10 $1.00/1 IZZE SODA 4-PK BOTTLES COUPONS EXP 09/30/11"}, {"price": "1.5", "imageurl": ["http://thumbs1.ebaystatic.com/pict/1305657868444040_1.jpg"], "name": "NEW DUBRO 3MM X 10 SOCKET HEAD CAP SCREWS # 2123 4 PCS"}];

function clone(obj)
{
  var newObj = (obj instanceof Array) ? [] : {};
  for (i in obj) {
    if (i == 'clone') continue;
    if (obj[i] && typeof obj[i] == "object") {
      newObj[i] = clone(obj[i]);
    } else newObj[i] = obj[i]
  } return newObj;
}

function getRandomKey(arr)
{
  var length = 0;
  $.each(arr, function() { length++; });
  
  var idx = Math.floor(Math.random() * length);
  var i = 0;
  for (key in arr)
    if (i++ == idx)
      return key;
}

function getRandomItem()
{
  return {
    item: clone(items[getRandomKey(items)]),
    seller: {id: 'Andrew', ratings: {pos: 1, neg: 45392}}
  };
}

function displayItems(mockup, item1, item2)
{
  if (item1 == undefined)
    item1 = getRandomItem()
  if (item2 == undefined)
    item2 = clone(item1);
  
  $(document.body).html($.tmpl(mockup, {items: [item1, item2]}));
}

function runMockup(mockup)
{
  if (mockup == undefined && location.hash.length > 1)
    mockup = location.hash.substr(1);
  
  if (mockups[mockup] == undefined)
    mockups[getRandomKey(mockups)]();
  else
    mockups[mockup]();
}

function templateReady(name)
{
  ready++;
  
  if (ready == num_mockups)
    runMockup();
}

// Location Proximity A, primary
function runLocationPrimary()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1.seller.location = 'North Carolina';
  item2.seller.location = 'your zip code';
  
  displayItems('location.primary', item1, item2);
}

// Location Proximity B, metareview
function runLocationMetareview()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['reviewer'] = {name: 'Alice', location: 'your zip code', rating: 'A+'};
  item2['reviewer'] = {name: 'Brad', location: 'North Carolina', rating: 'A+'};
  
  displayItems('location.metareview', item1, item2);
}

// Aggregate Number of Reviews A, primary
function runAggregatePrimary()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['reviews'] = {number: 100, rating: 'A+'};
  item2['reviews'] = {number: 200, rating: 'A+'};
  
  displayItems('aggregate.primary', item1, item2);
}

// Aggregate Number of Reviews B, metareview
function runAggregateMetareview()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['reviewer'] = {name: 'Brad', useful: 10, rating: 'A+'};
  item2['reviewer'] = {name: 'Alice', useful: 20, rating: 'A+'};
  
  displayItems('aggregate.metareview', item1, item2);
}

// Authority A, primary
function runAuthorityPrimary()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['reviewer'] = {name: 'Amazon Trusted Seller', rating: 'A+', additional: ''};
  item1.item['marketplace'] = 'Amazon'
  
  item2['reviewer'] = {name: 'A friend', rating: 'A+', additional: ' in your zip code.'};
  item2.item['marketplace'] = 'Craigslist'
  
  displayItems('authority.primary', item1, item2);
}

// Authority B, review location
function runAuthorityReviewLocation()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['reviewer'] = {name: 'Amazon', rating: 'A+'};
  item1.item['marketplace'] = 'Amazon'
  
  item2['reviewer'] = {name: 'Twitter', rating: 'A+'};
  item2.item['marketplace'] = 'Amazon'
  
  displayItems('authority.metareview', item1, item2);
}

// Writing Quality A, primary
function runWritingQualityPrimary()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1.item['description'] = 'ths item wuz buyed resintly at a garage sael.';
  item2.item['description'] = 'I purchased this item last week at a neighbor\'s yard sale.';
  
  displayItems('writingquality.primary', item1, item2);
}

// Writing Quality B, metareview
function runWritingQualityMetareview()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['review'] = {rating: 'A+', text: 'i got it ysterday nd its purfect nd im pritty happy!!!!!'};
  item2['review'] = {rating: 'A+', text: 'All the features worked as described, and I\'m very satisfied.'};
  
  displayItems('writingquality.metareview', item1, item2);
}

// Review Strength A, primary
function runReviewStrengthPrimary()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['review'] = {rating: 'A+'};
  item2['review'] = {rating: 'C+'};
  
  displayItems('reviewstrength.primary', item1, item2);
}

// Review Strength B, metareview
function runReviewStrengthMetareview()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['review'] = {rating: 'A+', meta: 'Extremely Helpful'};
  item2['review'] = {rating: 'A+', meta: 'Somewhat Helpful'};
  
  displayItems('reviewstrength.metareview', item1, item2);
}

// Prior Relationship A, primary
function runPriorRelationshipPrimary()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1.seller['relationship'] = 'Seller is one of your friends';
  item2.seller['relationship'] = 'Unknown Seller';
  
  displayItems('priorrelationship.primary', item1, item2);
}

// Prior Relationship B, metareview
function runPriorRelationshipMetareview()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['review'] = {rating: 'A+', relationship: undefined};
  item2['review'] = {rating: 'A+', relationship: 'you\'ve tagged as an <strong>expert</strong>'};
  
  displayItems('priorrelationship.metareview', item1, item2);
}

// Public Relation A, primary
function runPublicRelationPrimary()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1.seller['ratings'] = 170;
  item2.seller['ratings'] = 5;
  
  displayItems('publicrelation.primary', item1, item2);
}

// Public Relation B, metareview
function runPublicRelationMetareview()
{
  var item1 = getRandomItem();
  var item2 = clone(item1);
  
  item1['reviewer'] = {rating: 'A+', name: 'expert reviewer', meta: 100};
  item2['reviewer'] = {rating: 'A+', name: 'anonymous', meta: 2};
  
  displayItems('publicrelation.metareview', item1, item2);
}


var mockups = {
  'location.primary': runLocationPrimary,
  'location.metareview': runLocationMetareview,
  
  'aggregate.primary': runAggregatePrimary,
  'aggregate.metareview': runAggregateMetareview,
  
  'authority.primary': runAuthorityPrimary,
  'authority.metareview': runAuthorityReviewLocation,
  
  'writingquality.primary': runWritingQualityPrimary,
  'writingquality.metareview': runWritingQualityMetareview,
  
  'reviewstrength.primary': runReviewStrengthPrimary,
  'reviewstrength.metareview': runReviewStrengthMetareview,
  
  'priorrelationship.primary': runPriorRelationshipPrimary,
  'priorrelationship.metareview': runPriorRelationshipMetareview,
  
  'publicrelation.primary': runPublicRelationPrimary,
  'publicrelation.metareview': runPublicRelationMetareview,
};
var num_mockups = 0;
var ready = 0;

require(['jquery-1.6.2.min.js'], function()
  {
    require(['jquery.tmpl.min.js'], function()
      {
        $(function()
          {
            $.each(mockups, function (name, func)
              {
                num_mockups++;
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
            
            $(window).bind('hashchange', function()
              {
                runMockup();
              });
          });
      });
  });