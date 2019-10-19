const moment = require('moment');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));
}

function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  return date;
}

const names = ['John', 'Aaron', 'Ezekiel', 'Amos', 'Levi', 'Jebediah', 'Jacob', 'David', 'Daniel', 'Isaiah', 'Eli', 'Noah', 'Samuel', 'Moses', 'Mary', 'Sarah', 'Rebecca', 'Anna', 'Susanna', 'Hannah', 'Susan', 'Elizabeth', 'Rachel'];

const initials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var seederFunc = () => {
  for(var i = 0; i < data.length; i++) {
    data[i].review_id = i + 1;
    data[i].user = {
      user_id: i + 1,
      username: names[getRandomInt(0, names.length)] + ' ' + initials[getRandomInt(0, 26)],
      userimg: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'
    };
    data[i].product_id = getRandomInt(1, 101);
    data[i].created = moment(randomDate(1071265179893, 1571265179893)).format('LL');
    delete data[i].user_id;
    data[i].stars = getRandomInt(1, 6);
    data[i].helpfuls = getRandomInt(1, 50);
    if(i % 5 === 0) {
      data[i].verified = false;
    }
  }
}

var data = [
  {
    review_id: 1,
    product_id: 1,
    created: 20120304,
    title: 'This is my very first review',
    user_id: 1,
    body:
      'I have nothing construtive to say, I just wanted to say that I was here first!',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 2,
    product_id: 1,
    created: 20110913,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 94,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 3,
    style: '',
    helpfuls: 0
  },
  {
    review_id: 3,
    product_id: 12,
    created: 20181123,
    title: 'Post pounder calf, hay or duck is, tool shed horse.',
    user_id: 13,
    body:
      'veterinarian blue berries cattle jelly canning. Goose hammers cattle rats in crows. Garden windmill chicks, hen at corn in, lettus a peppers. House hen chinchillas in barn livestock cat hogs chicks trucks. Blu.',
    verified: false,
    stars: 2,
    style: '',
    helpfuls: 5
  },
  {
    review_id: 4,
    product_id: 3,
    created: 20100917,
    title: 'Killer scourge scared, drowning helpless sheep at',
    user_id: 4,
    body:
      'In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees.',
    verified: true,
    stars: 4,
    style: '',
    helpfuls: 4
  },
  {
    review_id: 5,
    product_id: 5,
    created: 20110530,
    title: 'Grapes nest pitch fork an plows maple syrup yearlings',
    user_id: 50,
    body:
      'Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. John Deere bees, parsley sweet corn at, porky pig shovels. Oranges cucumbers rhubarb gourds watermelon. Ewes mushrooms zucchini in forag.',
    verified: true,
    stars: 3,
    style: '',
    helpfuls: 0
  },
  {
    review_id: 6,
    product_id: 6,
    created: 20080317,
    title: 'Harvester at sheep with tractor.',
    user_id: 8,
    body:
      'Barn livestock cat hogs chicks trucks. Shovels at rakes plows. Oranges cucumbers rhubarb gourds watermelon. Oranges cucumbers rhubarb gourds watermelon. Augers oats hen cowpies. Petting zoo at carrots alligators quack. veterinarian blue berries cattle jelly canning. Augers oats hen cowpies. veterinarian blue berries cattle jelly canning. Oranges cucumbers rhubarb gourds watermelon. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Killer scourge scared, drowning helpless shee.',
    verified: true,
    stars: 5,
    style: '',
    helpfuls: 7
  },
  {
    review_id: 7,
    product_id: 7,
    created: 20070707,
    title: 'Straw augers beef kettle our crickets.',
    user_id: 7,
    body: 'Augers oats hen cowpies.',
    verified: true,
    stars: 2,
    style: '',
    helpfuls: 4
  },
  {
    review_id: 8,
    product_id: 98,
    created: 20080917,
    title: 'At, farmers market and cultivator ostrich.',
    user_id: 17,
    body:
      'Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb pig rooster sheep.',
    verified: true,
    stars: 4,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 9,
    product_id: 10,
    created: 20101010,
    title: 'Mallet herbs basil.',
    user_id: 10,
    body:
      'Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. House hen chinchillas in barn livestock cat hogs chicks trucks. Rooster celery pineapples fertilizer, a melon chirp pets in.',
    verified: true,
    stars: 2,
    style: '',
    helpfuls: 10
  },
  {
    review_id: 10,
    product_id: 11,
    created: 20181119,
    title: 'Lamb pig rooster sheep.',
    user_id: 38,
    body:
      'Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Veterinarian at Seeder eggs with watermelon ostriches.',
    verified: true,
    stars: 3,
    style: '',
    helpfuls: 3
  },
  {
    review_id: 11,
    product_id: 11,
    created: 20111111,
    title: 'Gobble feed, jelly peppers at plow basil swather',
    user_id: 11,
    body:
      'Grapes at yams mushrooms organic berries gobble. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Quack hammers eggplant is utters nails garden. . Fertilizer buzz, purr meow cheep chinchilla.',
    verified: true,
    stars: 4,
    style: '',
    helpfuls: 11
  },
  {
    review_id: 12,
    product_id: 12,
    created: 20190807,
    title: 'queak, seeds maple syrup worms, potato alligators grunt.',
    user_id: 19,
    body:
      'House hen chinchillas in barn livestock cat hogs chicks trucks. Lamb in eggplant baler rain barrels manure hay rake. Lettus gobbler.',
    verified: true,
    stars: 5,
    style: '',
    helpfuls: 19
  },
  {
    review_id: 13,
    product_id: 13,
    created: 20131313,
    title: 'Manure',
    user_id: 13,
    body: 'Radish on kidney beans',
    verified: true,
    stars: 5,
    style: '',
    helpfuls: 13
  },
  {
    review_id: 14,
    product_id: 16,
    created: 20040403,
    title: 'Forage Harvester',
    user_id: 17,
    body:
      'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.',
    verified: true,
    stars: 2,
    style: '',
    helpfuls: 0
  },
  {
    review_id: 15,
    product_id: 19,
    created: 20140504,
    title: 'House at pony.',
    user_id: 12,
    body:
      'Prairie dogs raccoons robins rats. John Deere bees, parsley sweet corn at, porky pig shovels.',
    verified: true,
    stars: 3,
    style: '',
    helpfuls: 3
  },
  {
    review_id: 16,
    product_id: 16,
    created: 20110304,
    title: 'Veterinarian at Seeder eggs with watermelon ostriches.',
    user_id: 1,
    body:
      'Bees, parsley sweet corn at, porky pig shovels. Gourds utters at welding equipment a oink oink haybine. Post pounder calf, hay or duck is, tool shed horse. Forage Harvester. Kidney beans ostrich trucks. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Hoot squeal moose quack, crows doggies frogs crickets chirp. Straw augers beef kettle our crickets. Baa potato donkey mouse, at gate grain bins woof. Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Gourds utters at welding equipmen.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In pig.',
    user_id: 1,
    body:
      'Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. John Deer.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'A oink oink haybine.',
    user_id: 1,
    body:
      'Augers oats hen cowpies. In the straw rain barrels. Mooo cat daisys, grunt in turkey coo, windmill at bull. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes at yams mushrooms organic berries gobble.',
    user_id: 1,
    body:
      'Straw augers beef kettle our crickets. House hen chinchillas in barn livestock cat hogs chicks trucks. Fertilizer buzz, purr meow chee.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Chinchillas squeak',
    user_id: 1,
    body: 'Post pounder calf.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Garden windmill chicks',
    user_id: 1,
    body:
      'Eggs squeal, horses moonshine apples raising Mooo tractor plow. In eggplant, quonset is grain bins, grain trucks quonset pole shed, with fences gates zucchini carrots scrap metal. Garde.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Augers oats hen cowpies.',
    user_id: 1,
    body:
      'Hoot pony robins peacocks an kale. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Prairie dogs raccoons robins rats. Oranges cucumbers rhubarb gourds watermelon. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. Coo with rabbits ect.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Garden windmill chicks, hen at corn in',
    user_id: 1,
    body:
      'Goose hammers cattle rats in crows. Mouse soybeans sweet corn hogs llamas or oink oink wind. Prairie dogs raccoons robins rats. Post pounder calf, hay o.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Feed in a woof, a farmers market.',
    user_id: 1,
    body:
      'Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In the straw rain barrels.',
    user_id: 1,
    body:
      'In the straw rain barrels. Baa potato donkey mouse, at gate grain bins woof.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Oranges cucumbers rhubarb gourds watermelon.',
    user_id: 1,
    body:
      'Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Baa potato donkey mouse, at gate grain bins woof. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mallet herbs basil nest',
    user_id: 1,
    body:
      'On kidney beans, llamas pick up truck. Straw augers beef kettle our crickets. Garden windmill chicks, hen at corn in, lettus a peppers.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Killer scourge scared',
    user_id: 1,
    body:
      'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Petting zoo at carrots alligators quack. Prairie dogs raccoons robins rats. Hoot squeal moose quack, crows doggies frogs crickets chirp. Brussel sprouts cow, rabbits a gates a, storag.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Shed fences.',
    user_id: 1,
    body: 'bull bowels cat chicken cow, calf donkey duck.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In eggplant, quonset is grain bins',
    user_id: 1,
    body:
      'Oranges cucumbers rhubarb gourds watermelon. John Deere bees, parsley sweet corn at, porky pig shovels. Cauliflower a seeds quail. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. House hen chinchillas in barn livestock cat hogs chick.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Trucks.',
    user_id: 1,
    body: 'Apples ducks straw',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Squeal.',
    user_id: 1,
    body:
      'Kidney beans ostrich trucks. veterinarian blue berries cattle jelly canning. Grapes nest pitch fork an plows maple syrup yearlings, quil.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Hoot squeal moose quack',
    user_id: 1,
    body:
      'crows doggies frogs crickets chirp. Forage Harvester rakes peacocks, squeal garden woof. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Fertilize.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Buzz',
    user_id: 1,
    body:
      'Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Pigeons buzz nails.',
    user_id: 1,
    body:
      'Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Combine Harvester swather',
    user_id: 1,
    body:
      'baler as haybine parsley, melon in hay rake. Baa potato donkey mouse, at gate grain bins woof. Onion organic oranges and purr ducks canning owls at a squeal.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Robins peacocks an kale.',
    user_id: 1,
    body:
      'Hoot squeal moose quack, crows doggies frogs crickets chirp. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pon.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mice sunflower wheat in pig.',
    user_id: 1,
    body:
      'Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fertilizer, a melon chirp pets in.',
    user_id: 1,
    body:
      'Mice sunflower wheat in pig. Mooo cat daisys, grunt in turkey coo, windmill at bull. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Quack hammers eggplant is utters nails garden. Goose hammers cattle rats in crows. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. veterinarian blue berries cattle jelly canning. Rooster celery pineapple.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fork sunflower cowpies mice.',
    user_id: 1,
    body:
      'Goat goose hen horse. bull bowels cat chicken cow, calf donkey duck. House hen chinchillas in barn livestock cat hogs chicks trucks. Garden windmill chicks, hen at corn in, lettus a peppers.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Coo with rabbits ect.',
    user_id: 1,
    body:
      'Garden windmill chicks, hen at corn in, lettus a peppers. Coo with rabbits ect. Goat goose hen horse. Mooo cat daisys, grunt in turkey coo, windmill at bull. Straw augers beef kettle our crickets. Blue berries pigeons buzz and bean prairie dogs nails at est.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Fork sunflower cowpies mice. Goat goose hen horse. bull bowels cat chicken cow, calf donkey duck. House hen chinchillas in barn livestock cat hogs chicks trucks. Garden windmill chicks, hen at corn in, lettus a peppers. Coo with rabbits ect. Goat goose hen horse. Mooo cat daisys, grunt in turkey coo, windmill at bull. Straw augers beef kettle our crickets. Blue berries pigeons buzz and bean prairie dogs nails at est.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Dogs nails.',
    user_id: 1,
    body:
      'Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fertilizer',
    user_id: 1,
    body:
      'Robins peacocks an kale. Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Gobble feed',
    user_id: 1,
    body:
      'Buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Forage',
    user_id: 1,
    body:
      'Combine Harvester swather, baler as haybine parsley, melon in hay rake. Baa potato donkey mouse, at gate grain bins woof. Onion organic oranges and purr ducks canning owls at a squeal. . Hoot squeal moose quack, crows doggies frogs crickets chirp.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Bats in crows',
    user_id: 1,
    body:
      'Fertilizer, a melon chirp pets in. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitc.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Goat goose hen horse.',
    user_id: 1,
    body:
      'Quack hammers eggplant is utters nails garden. Goose hammers cattle rats in crows. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. veterinarian blue berries cattle jelly canning. Rooster celery pineapple.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Hoot squeal moose quack',
    user_id: 1,
    body:
      'Robins peacocks an kale. Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes nest pitch fork',
    user_id: 1,
    body:
      'Buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Post pounder calf, hay or duck is, tool shed horse.',
    user_id: 1,
    body:
      'veterinarian blue berries cattle jelly canning. Goose hammers cattle rats in crows. Garden windmill chicks, hen at corn in, lettus a peppers. House hen chinchillas in barn livestock cat hogs chicks trucks. Blu.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Killer scourge scared, drowning helpless sheep at',
    user_id: 1,
    body:
      'In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes nest pitch fork an plows maple syrup yearlings',
    user_id: 1,
    body:
      'Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. John Deere bees, parsley sweet corn at, porky pig shovels. Oranges cucumbers rhubarb gourds watermelon. Ewes mushrooms zucchini in forag.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Harvester at sheep with tractor.',
    user_id: 1,
    body:
      'Barn livestock cat hogs chicks trucks. Shovels at rakes plows. Oranges cucumbers rhubarb gourds watermelon. Oranges cucumbers rhubarb gourds watermelon. Augers oats hen cowpies. Petting zoo at carrots alligators quack. veterinarian blue berries cattle jelly canning. Augers oats hen cowpies. veterinarian blue berries cattle jelly canning. Oranges cucumbers rhubarb gourds watermelon. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Killer scourge scared, drowning helpless shee.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Straw augers beef kettle our crickets.',
    user_id: 1,
    body: 'Augers oats hen cowpies.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'At, farmers market and cultivator ostrich.',
    user_id: 1,
    body:
      'Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb pig rooster sheep.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mallet herbs basil.',
    user_id: 1,
    body:
      'Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. House hen chinchillas in barn livestock cat hogs chicks trucks. Rooster celery pineapples fertilizer, a melon chirp pets in.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Lamb pig rooster sheep.',
    user_id: 1,
    body:
      'Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Veterinarian at Seeder eggs with watermelon ostriches.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Gobble feed, jelly peppers at plow basil swather',
    user_id: 1,
    body:
      'Grapes at yams mushrooms organic berries gobble. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Quack hammers eggplant is utters nails garden. . Fertilizer buzz, purr meow cheep chinchilla.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'queak, seeds maple syrup worms, potato alligators grunt.',
    user_id: 1,
    body:
      'House hen chinchillas in barn livestock cat hogs chicks trucks. Lamb in eggplant baler rain barrels manure hay rake. Lettus gobbler.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Manure',
    user_id: 1,
    body: 'Radish on kidney beans',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Forage Harvester',
    user_id: 1,
    body:
      'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'House at pony.',
    user_id: 1,
    body:
      'Prairie dogs raccoons robins rats. John Deere bees, parsley sweet corn at, porky pig shovels.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Veterinarian at Seeder eggs with watermelon ostriches.',
    user_id: 1,
    body:
      'Bees, parsley sweet corn at, porky pig shovels. Gourds utters at welding equipment a oink oink haybine. Post pounder calf, hay or duck is, tool shed horse. Forage Harvester. Kidney beans ostrich trucks. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Hoot squeal moose quack, crows doggies frogs crickets chirp. Straw augers beef kettle our crickets. Baa potato donkey mouse, at gate grain bins woof. Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Gourds utters at welding equipmen.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In pig.',
    user_id: 1,
    body:
      'Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. John Deer.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'A oink oink haybine.',
    user_id: 1,
    body:
      'Augers oats hen cowpies. In the straw rain barrels. Mooo cat daisys, grunt in turkey coo, windmill at bull. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes at yams mushrooms organic berries gobble.',
    user_id: 1,
    body:
      'Straw augers beef kettle our crickets. House hen chinchillas in barn livestock cat hogs chicks trucks. Fertilizer buzz, purr meow chee.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Chinchillas squeak',
    user_id: 1,
    body: 'Post pounder calf.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Garden windmill chicks',
    user_id: 1,
    body:
      'Eggs squeal, horses moonshine apples raising Mooo tractor plow. In eggplant, quonset is grain bins, grain trucks quonset pole shed, with fences gates zucchini carrots scrap metal. Garde.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Augers oats hen cowpies.',
    user_id: 1,
    body:
      'Hoot pony robins peacocks an kale. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Prairie dogs raccoons robins rats. Oranges cucumbers rhubarb gourds watermelon. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. Coo with rabbits ect.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Garden windmill chicks, hen at corn in',
    user_id: 1,
    body:
      'Goose hammers cattle rats in crows. Mouse soybeans sweet corn hogs llamas or oink oink wind. Prairie dogs raccoons robins rats. Post pounder calf, hay o.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Feed in a woof, a farmers market.',
    user_id: 1,
    body:
      'Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In the straw rain barrels.',
    user_id: 1,
    body:
      'In the straw rain barrels. Baa potato donkey mouse, at gate grain bins woof.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Oranges cucumbers rhubarb gourds watermelon.',
    user_id: 1,
    body:
      'Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Baa potato donkey mouse, at gate grain bins woof. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mallet herbs basil nest',
    user_id: 1,
    body:
      'On kidney beans, llamas pick up truck. Straw augers beef kettle our crickets. Garden windmill chicks, hen at corn in, lettus a peppers.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Killer scourge scared',
    user_id: 1,
    body:
      'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Petting zoo at carrots alligators quack. Prairie dogs raccoons robins rats. Hoot squeal moose quack, crows doggies frogs crickets chirp. Brussel sprouts cow, rabbits a gates a, storag.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Shed fences.',
    user_id: 1,
    body: 'bull bowels cat chicken cow, calf donkey duck.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In eggplant, quonset is grain bins',
    user_id: 1,
    body:
      'Oranges cucumbers rhubarb gourds watermelon. John Deere bees, parsley sweet corn at, porky pig shovels. Cauliflower a seeds quail. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. House hen chinchillas in barn livestock cat hogs chick.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Trucks.',
    user_id: 1,
    body: 'Apples ducks straw',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Squeal.',
    user_id: 1,
    body:
      'Kidney beans ostrich trucks. veterinarian blue berries cattle jelly canning. Grapes nest pitch fork an plows maple syrup yearlings, quil.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Hoot squeal moose quack',
    user_id: 1,
    body:
      'crows doggies frogs crickets chirp. Forage Harvester rakes peacocks, squeal garden woof. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Fertilize.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Buzz',
    user_id: 1,
    body:
      'Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Pigeons buzz nails.',
    user_id: 1,
    body:
      'Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Combine Harvester swather',
    user_id: 1,
    body:
      'baler as haybine parsley, melon in hay rake. Baa potato donkey mouse, at gate grain bins woof. Onion organic oranges and purr ducks canning owls at a squeal.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Robins peacocks an kale.',
    user_id: 1,
    body:
      'Hoot squeal moose quack, crows doggies frogs crickets chirp. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pon.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mice sunflower wheat in pig.',
    user_id: 1,
    body:
      'Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fertilizer, a melon chirp pets in.',
    user_id: 1,
    body:
      'Mice sunflower wheat in pig. Mooo cat daisys, grunt in turkey coo, windmill at bull. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Quack hammers eggplant is utters nails garden. Goose hammers cattle rats in crows. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. veterinarian blue berries cattle jelly canning. Rooster celery pineapple.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fork sunflower cowpies mice.',
    user_id: 1,
    body:
      'Goat goose hen horse. bull bowels cat chicken cow, calf donkey duck. House hen chinchillas in barn livestock cat hogs chicks trucks. Garden windmill chicks, hen at corn in, lettus a peppers.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Coo with rabbits ect.',
    user_id: 1,
    body:
      'Garden windmill chicks, hen at corn in, lettus a peppers. Coo with rabbits ect. Goat goose hen horse. Mooo cat daisys, grunt in turkey coo, windmill at bull. Straw augers beef kettle our crickets. Blue berries pigeons buzz and bean prairie dogs nails at est.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Fork sunflower cowpies mice. Goat goose hen horse. bull bowels cat chicken cow, calf donkey duck. House hen chinchillas in barn livestock cat hogs chicks trucks. Garden windmill chicks, hen at corn in, lettus a peppers. Coo with rabbits ect. Goat goose hen horse. Mooo cat daisys, grunt in turkey coo, windmill at bull. Straw augers beef kettle our crickets. Blue berries pigeons buzz and bean prairie dogs nails at est.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Dogs nails.',
    user_id: 1,
    body:
      'Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fertilizer',
    user_id: 1,
    body:
      'Robins peacocks an kale. Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Gobble feed',
    user_id: 1,
    body:
      'Buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Forage',
    user_id: 1,
    body:
      'Combine Harvester swather, baler as haybine parsley, melon in hay rake. Baa potato donkey mouse, at gate grain bins woof. Onion organic oranges and purr ducks canning owls at a squeal. . Hoot squeal moose quack, crows doggies frogs crickets chirp.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Bats in crows',
    user_id: 1,
    body:
      'Fertilizer, a melon chirp pets in. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitc.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Goat goose hen horse.',
    user_id: 1,
    body:
      'Quack hammers eggplant is utters nails garden. Goose hammers cattle rats in crows. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. veterinarian blue berries cattle jelly canning. Rooster celery pineapple.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Hoot squeal moose quack',
    user_id: 1,
    body:
      'Robins peacocks an kale. Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes nest pitch fork',
    user_id: 1,
    body:
      'Buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 20120304,
    title: 'This is my very first review',
    user_id: 1,
    body:
      'I have nothing construtive to say, I just wanted to say that I was here first!',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 2,
    product_id: 1,
    created: 20110913,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 94,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 3,
    style: '',
    helpfuls: 0
  },
  {
    review_id: 3,
    product_id: 12,
    created: 20181123,
    title: 'Post pounder calf, hay or duck is, tool shed horse.',
    user_id: 13,
    body:
      'veterinarian blue berries cattle jelly canning. Goose hammers cattle rats in crows. Garden windmill chicks, hen at corn in, lettus a peppers. House hen chinchillas in barn livestock cat hogs chicks trucks. Blu.',
    verified: false,
    stars: 2,
    style: '',
    helpfuls: 5
  },
  {
    review_id: 4,
    product_id: 3,
    created: 20100917,
    title: 'Killer scourge scared, drowning helpless sheep at',
    user_id: 4,
    body:
      'In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees.',
    verified: true,
    stars: 4,
    style: '',
    helpfuls: 4
  },
  {
    review_id: 5,
    product_id: 5,
    created: 20110530,
    title: 'Grapes nest pitch fork an plows maple syrup yearlings',
    user_id: 50,
    body:
      'Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. John Deere bees, parsley sweet corn at, porky pig shovels. Oranges cucumbers rhubarb gourds watermelon. Ewes mushrooms zucchini in forag.',
    verified: true,
    stars: 3,
    style: '',
    helpfuls: 0
  },
  {
    review_id: 6,
    product_id: 6,
    created: 20080317,
    title: 'Harvester at sheep with tractor.',
    user_id: 8,
    body:
      'Barn livestock cat hogs chicks trucks. Shovels at rakes plows. Oranges cucumbers rhubarb gourds watermelon. Oranges cucumbers rhubarb gourds watermelon. Augers oats hen cowpies. Petting zoo at carrots alligators quack. veterinarian blue berries cattle jelly canning. Augers oats hen cowpies. veterinarian blue berries cattle jelly canning. Oranges cucumbers rhubarb gourds watermelon. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Killer scourge scared, drowning helpless shee.',
    verified: true,
    stars: 5,
    style: '',
    helpfuls: 7
  },
  {
    review_id: 7,
    product_id: 7,
    created: 20070707,
    title: 'Straw augers beef kettle our crickets.',
    user_id: 7,
    body: 'Augers oats hen cowpies.',
    verified: true,
    stars: 2,
    style: '',
    helpfuls: 4
  },
  {
    review_id: 8,
    product_id: 98,
    created: 20080917,
    title: 'At, farmers market and cultivator ostrich.',
    user_id: 17,
    body:
      'Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb pig rooster sheep.',
    verified: true,
    stars: 4,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 9,
    product_id: 10,
    created: 20101010,
    title: 'Mallet herbs basil.',
    user_id: 10,
    body:
      'Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. House hen chinchillas in barn livestock cat hogs chicks trucks. Rooster celery pineapples fertilizer, a melon chirp pets in.',
    verified: true,
    stars: 2,
    style: '',
    helpfuls: 10
  },
  {
    review_id: 10,
    product_id: 11,
    created: 20181119,
    title: 'Lamb pig rooster sheep.',
    user_id: 38,
    body:
      'Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Veterinarian at Seeder eggs with watermelon ostriches.',
    verified: true,
    stars: 3,
    style: '',
    helpfuls: 3
  },
  {
    review_id: 11,
    product_id: 11,
    created: 20111111,
    title: 'Gobble feed, jelly peppers at plow basil swather',
    user_id: 11,
    body:
      'Grapes at yams mushrooms organic berries gobble. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Quack hammers eggplant is utters nails garden. . Fertilizer buzz, purr meow cheep chinchilla.',
    verified: true,
    stars: 4,
    style: '',
    helpfuls: 11
  },
  {
    review_id: 12,
    product_id: 12,
    created: 20190807,
    title: 'queak, seeds maple syrup worms, potato alligators grunt.',
    user_id: 19,
    body:
      'House hen chinchillas in barn livestock cat hogs chicks trucks. Lamb in eggplant baler rain barrels manure hay rake. Lettus gobbler.',
    verified: true,
    stars: 5,
    style: '',
    helpfuls: 19
  },
  {
    review_id: 13,
    product_id: 13,
    created: 20131313,
    title: 'Manure',
    user_id: 13,
    body: 'Radish on kidney beans',
    verified: true,
    stars: 5,
    style: '',
    helpfuls: 13
  },
  {
    review_id: 14,
    product_id: 16,
    created: 20040403,
    title: 'Forage Harvester',
    user_id: 17,
    body:
      'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.',
    verified: true,
    stars: 2,
    style: '',
    helpfuls: 0
  },
  {
    review_id: 15,
    product_id: 19,
    created: 20140504,
    title: 'House at pony.',
    user_id: 12,
    body:
      'Prairie dogs raccoons robins rats. John Deere bees, parsley sweet corn at, porky pig shovels.',
    verified: true,
    stars: 3,
    style: '',
    helpfuls: 3
  },
  {
    review_id: 16,
    product_id: 16,
    created: 20110304,
    title: 'Veterinarian at Seeder eggs with watermelon ostriches.',
    user_id: 1,
    body:
      'Bees, parsley sweet corn at, porky pig shovels. Gourds utters at welding equipment a oink oink haybine. Post pounder calf, hay or duck is, tool shed horse. Forage Harvester. Kidney beans ostrich trucks. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Hoot squeal moose quack, crows doggies frogs crickets chirp. Straw augers beef kettle our crickets. Baa potato donkey mouse, at gate grain bins woof. Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Gourds utters at welding equipmen.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In pig.',
    user_id: 1,
    body:
      'Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. John Deer.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'A oink oink haybine.',
    user_id: 1,
    body:
      'Augers oats hen cowpies. In the straw rain barrels. Mooo cat daisys, grunt in turkey coo, windmill at bull. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes at yams mushrooms organic berries gobble.',
    user_id: 1,
    body:
      'Straw augers beef kettle our crickets. House hen chinchillas in barn livestock cat hogs chicks trucks. Fertilizer buzz, purr meow chee.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Chinchillas squeak',
    user_id: 1,
    body: 'Post pounder calf.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Garden windmill chicks',
    user_id: 1,
    body:
      'Eggs squeal, horses moonshine apples raising Mooo tractor plow. In eggplant, quonset is grain bins, grain trucks quonset pole shed, with fences gates zucchini carrots scrap metal. Garde.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Augers oats hen cowpies.',
    user_id: 1,
    body:
      'Hoot pony robins peacocks an kale. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Prairie dogs raccoons robins rats. Oranges cucumbers rhubarb gourds watermelon. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. Coo with rabbits ect.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Garden windmill chicks, hen at corn in',
    user_id: 1,
    body:
      'Goose hammers cattle rats in crows. Mouse soybeans sweet corn hogs llamas or oink oink wind. Prairie dogs raccoons robins rats. Post pounder calf, hay o.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Feed in a woof, a farmers market.',
    user_id: 1,
    body:
      'Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In the straw rain barrels.',
    user_id: 1,
    body:
      'In the straw rain barrels. Baa potato donkey mouse, at gate grain bins woof.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Oranges cucumbers rhubarb gourds watermelon.',
    user_id: 1,
    body:
      'Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Baa potato donkey mouse, at gate grain bins woof. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mallet herbs basil nest',
    user_id: 1,
    body:
      'On kidney beans, llamas pick up truck. Straw augers beef kettle our crickets. Garden windmill chicks, hen at corn in, lettus a peppers.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Killer scourge scared',
    user_id: 1,
    body:
      'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Petting zoo at carrots alligators quack. Prairie dogs raccoons robins rats. Hoot squeal moose quack, crows doggies frogs crickets chirp. Brussel sprouts cow, rabbits a gates a, storag.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Shed fences.',
    user_id: 1,
    body: 'bull bowels cat chicken cow, calf donkey duck.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In eggplant, quonset is grain bins',
    user_id: 1,
    body:
      'Oranges cucumbers rhubarb gourds watermelon. John Deere bees, parsley sweet corn at, porky pig shovels. Cauliflower a seeds quail. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. House hen chinchillas in barn livestock cat hogs chick.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Trucks.',
    user_id: 1,
    body: 'Apples ducks straw',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Squeal.',
    user_id: 1,
    body:
      'Kidney beans ostrich trucks. veterinarian blue berries cattle jelly canning. Grapes nest pitch fork an plows maple syrup yearlings, quil.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Hoot squeal moose quack',
    user_id: 1,
    body:
      'crows doggies frogs crickets chirp. Forage Harvester rakes peacocks, squeal garden woof. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Fertilize.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Buzz',
    user_id: 1,
    body:
      'Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Pigeons buzz nails.',
    user_id: 1,
    body:
      'Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Combine Harvester swather',
    user_id: 1,
    body:
      'baler as haybine parsley, melon in hay rake. Baa potato donkey mouse, at gate grain bins woof. Onion organic oranges and purr ducks canning owls at a squeal.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Robins peacocks an kale.',
    user_id: 1,
    body:
      'Hoot squeal moose quack, crows doggies frogs crickets chirp. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pon.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mice sunflower wheat in pig.',
    user_id: 1,
    body:
      'Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fertilizer, a melon chirp pets in.',
    user_id: 1,
    body:
      'Mice sunflower wheat in pig. Mooo cat daisys, grunt in turkey coo, windmill at bull. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Quack hammers eggplant is utters nails garden. Goose hammers cattle rats in crows. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. veterinarian blue berries cattle jelly canning. Rooster celery pineapple.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fork sunflower cowpies mice.',
    user_id: 1,
    body:
      'Goat goose hen horse. bull bowels cat chicken cow, calf donkey duck. House hen chinchillas in barn livestock cat hogs chicks trucks. Garden windmill chicks, hen at corn in, lettus a peppers.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Coo with rabbits ect.',
    user_id: 1,
    body:
      'Garden windmill chicks, hen at corn in, lettus a peppers. Coo with rabbits ect. Goat goose hen horse. Mooo cat daisys, grunt in turkey coo, windmill at bull. Straw augers beef kettle our crickets. Blue berries pigeons buzz and bean prairie dogs nails at est.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Fork sunflower cowpies mice. Goat goose hen horse. bull bowels cat chicken cow, calf donkey duck. House hen chinchillas in barn livestock cat hogs chicks trucks. Garden windmill chicks, hen at corn in, lettus a peppers. Coo with rabbits ect. Goat goose hen horse. Mooo cat daisys, grunt in turkey coo, windmill at bull. Straw augers beef kettle our crickets. Blue berries pigeons buzz and bean prairie dogs nails at est.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Dogs nails.',
    user_id: 1,
    body:
      'Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fertilizer',
    user_id: 1,
    body:
      'Robins peacocks an kale. Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Gobble feed',
    user_id: 1,
    body:
      'Buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Forage',
    user_id: 1,
    body:
      'Combine Harvester swather, baler as haybine parsley, melon in hay rake. Baa potato donkey mouse, at gate grain bins woof. Onion organic oranges and purr ducks canning owls at a squeal. . Hoot squeal moose quack, crows doggies frogs crickets chirp.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Bats in crows',
    user_id: 1,
    body:
      'Fertilizer, a melon chirp pets in. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitc.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Goat goose hen horse.',
    user_id: 1,
    body:
      'Quack hammers eggplant is utters nails garden. Goose hammers cattle rats in crows. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. veterinarian blue berries cattle jelly canning. Rooster celery pineapple.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Hoot squeal moose quack',
    user_id: 1,
    body:
      'Robins peacocks an kale. Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes nest pitch fork',
    user_id: 1,
    body:
      'Buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Post pounder calf, hay or duck is, tool shed horse.',
    user_id: 1,
    body:
      'veterinarian blue berries cattle jelly canning. Goose hammers cattle rats in crows. Garden windmill chicks, hen at corn in, lettus a peppers. House hen chinchillas in barn livestock cat hogs chicks trucks. Blu.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Killer scourge scared, drowning helpless sheep at',
    user_id: 1,
    body:
      'In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitch fork sunflower cowpies mice. Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes nest pitch fork an plows maple syrup yearlings',
    user_id: 1,
    body:
      'Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. John Deere bees, parsley sweet corn at, porky pig shovels. Oranges cucumbers rhubarb gourds watermelon. Ewes mushrooms zucchini in forag.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Harvester at sheep with tractor.',
    user_id: 1,
    body:
      'Barn livestock cat hogs chicks trucks. Shovels at rakes plows. Oranges cucumbers rhubarb gourds watermelon. Oranges cucumbers rhubarb gourds watermelon. Augers oats hen cowpies. Petting zoo at carrots alligators quack. veterinarian blue berries cattle jelly canning. Augers oats hen cowpies. veterinarian blue berries cattle jelly canning. Oranges cucumbers rhubarb gourds watermelon. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Killer scourge scared, drowning helpless shee.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Straw augers beef kettle our crickets.',
    user_id: 1,
    body: 'Augers oats hen cowpies.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'At, farmers market and cultivator ostrich.',
    user_id: 1,
    body:
      'Pick up truck livestock, pets and storage shed, troughs feed bale manure, is garden wheat oats at augers. Lamb pig rooster sheep.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mallet herbs basil.',
    user_id: 1,
    body:
      'Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. House hen chinchillas in barn livestock cat hogs chicks trucks. Rooster celery pineapples fertilizer, a melon chirp pets in.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Lamb pig rooster sheep.',
    user_id: 1,
    body:
      'Fertilizer buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Veterinarian at Seeder eggs with watermelon ostriches.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Gobble feed, jelly peppers at plow basil swather',
    user_id: 1,
    body:
      'Grapes at yams mushrooms organic berries gobble. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich. Quack hammers eggplant is utters nails garden. . Fertilizer buzz, purr meow cheep chinchilla.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'queak, seeds maple syrup worms, potato alligators grunt.',
    user_id: 1,
    body:
      'House hen chinchillas in barn livestock cat hogs chicks trucks. Lamb in eggplant baler rain barrels manure hay rake. Lettus gobbler.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Manure',
    user_id: 1,
    body: 'Radish on kidney beans',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Forage Harvester',
    user_id: 1,
    body:
      'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Ewes fox, hay hook hay manure, John Deere radish barn, a hay lof.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'House at pony.',
    user_id: 1,
    body:
      'Prairie dogs raccoons robins rats. John Deere bees, parsley sweet corn at, porky pig shovels.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Veterinarian at Seeder eggs with watermelon ostriches.',
    user_id: 1,
    body:
      'Bees, parsley sweet corn at, porky pig shovels. Gourds utters at welding equipment a oink oink haybine. Post pounder calf, hay or duck is, tool shed horse. Forage Harvester. Kidney beans ostrich trucks. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Hoot squeal moose quack, crows doggies frogs crickets chirp. Straw augers beef kettle our crickets. Baa potato donkey mouse, at gate grain bins woof. Sage mower goat, raccoons rhubarb outhouse a, apples berries corn. Gourds utters at welding equipmen.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In pig.',
    user_id: 1,
    body:
      'Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. John Deer.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'A oink oink haybine.',
    user_id: 1,
    body:
      'Augers oats hen cowpies. In the straw rain barrels. Mooo cat daisys, grunt in turkey coo, windmill at bull. Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes at yams mushrooms organic berries gobble.',
    user_id: 1,
    body:
      'Straw augers beef kettle our crickets. House hen chinchillas in barn livestock cat hogs chicks trucks. Fertilizer buzz, purr meow chee.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Chinchillas squeak',
    user_id: 1,
    body: 'Post pounder calf.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Garden windmill chicks',
    user_id: 1,
    body:
      'Eggs squeal, horses moonshine apples raising Mooo tractor plow. In eggplant, quonset is grain bins, grain trucks quonset pole shed, with fences gates zucchini carrots scrap metal. Garde.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Augers oats hen cowpies.',
    user_id: 1,
    body:
      'Hoot pony robins peacocks an kale. Apples ducks straw, quail a ostriches donkey, hay hook cucumbers. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Prairie dogs raccoons robins rats. Oranges cucumbers rhubarb gourds watermelon. Ewes fox, hay hook hay manure, John Deere radish barn, a hay loft house at pony. Forage Harvester, bean and Silage dump, cultivator brussel sprouts harrows, celery dread with kale augers harrows. Coo with rabbits ect.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Garden windmill chicks, hen at corn in',
    user_id: 1,
    body:
      'Goose hammers cattle rats in crows. Mouse soybeans sweet corn hogs llamas or oink oink wind. Prairie dogs raccoons robins rats. Post pounder calf, hay o.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Feed in a woof, a farmers market.',
    user_id: 1,
    body:
      'Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Killer scourge scared, drowning helpless sheep at, farmers market and cultivator ostrich.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In the straw rain barrels.',
    user_id: 1,
    body:
      'In the straw rain barrels. Baa potato donkey mouse, at gate grain bins woof.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Oranges cucumbers rhubarb gourds watermelon.',
    user_id: 1,
    body:
      'Chainsaw foal hay hook, herbs at combine harvester, children is mallet. Baa potato donkey mouse, at gate grain bins woof. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mallet herbs basil nest',
    user_id: 1,
    body:
      'On kidney beans, llamas pick up truck. Straw augers beef kettle our crickets. Garden windmill chicks, hen at corn in, lettus a peppers.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Killer scourge scared',
    user_id: 1,
    body:
      'Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. Petting zoo at carrots alligators quack. Prairie dogs raccoons robins rats. Hoot squeal moose quack, crows doggies frogs crickets chirp. Brussel sprouts cow, rabbits a gates a, storag.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Blueberries pigeons buzz and bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Petting zoo bulls, Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Shed fences.',
    user_id: 1,
    body: 'bull bowels cat chicken cow, calf donkey duck.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'In eggplant, quonset is grain bins',
    user_id: 1,
    body:
      'Oranges cucumbers rhubarb gourds watermelon. John Deere bees, parsley sweet corn at, porky pig shovels. Cauliflower a seeds quail. Chainsaw foal hay hook, herbs at combine harvester, children is mallet. House hen chinchillas in barn livestock cat hogs chick.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Trucks.',
    user_id: 1,
    body: 'Apples ducks straw',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Squeal.',
    user_id: 1,
    body:
      'Kidney beans ostrich trucks. veterinarian blue berries cattle jelly canning. Grapes nest pitch fork an plows maple syrup yearlings, quil.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Hoot squeal moose quack',
    user_id: 1,
    body:
      'crows doggies frogs crickets chirp. Forage Harvester rakes peacocks, squeal garden woof. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pony robins peacocks an kale. Fertilize.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Buzz',
    user_id: 1,
    body:
      'Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Pigeons buzz nails.',
    user_id: 1,
    body:
      'Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Combine Harvester swather',
    user_id: 1,
    body:
      'baler as haybine parsley, melon in hay rake. Baa potato donkey mouse, at gate grain bins woof. Onion organic oranges and purr ducks canning owls at a squeal.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Robins peacocks an kale.',
    user_id: 1,
    body:
      'Hoot squeal moose quack, crows doggies frogs crickets chirp. Gobble feed, jelly peppers at plow basil swather, cat weathervane grain trucks, hoot pon.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Mice sunflower wheat in pig.',
    user_id: 1,
    body:
      'Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fertilizer, a melon chirp pets in.',
    user_id: 1,
    body:
      'Mice sunflower wheat in pig. Mooo cat daisys, grunt in turkey coo, windmill at bull. Combine Harvester swather, baler as haybine parsley, melon in hay rake. Quack hammers eggplant is utters nails garden. Goose hammers cattle rats in crows. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. veterinarian blue berries cattle jelly canning. Rooster celery pineapple.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fork sunflower cowpies mice.',
    user_id: 1,
    body:
      'Goat goose hen horse. bull bowels cat chicken cow, calf donkey duck. House hen chinchillas in barn livestock cat hogs chicks trucks. Garden windmill chicks, hen at corn in, lettus a peppers.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Coo with rabbits ect.',
    user_id: 1,
    body:
      'Garden windmill chicks, hen at corn in, lettus a peppers. Coo with rabbits ect. Goat goose hen horse. Mooo cat daisys, grunt in turkey coo, windmill at bull. Straw augers beef kettle our crickets. Blue berries pigeons buzz and bean prairie dogs nails at est.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Bean prairie dogs nails at est.',
    user_id: 1,
    body:
      'Fork sunflower cowpies mice. Goat goose hen horse. bull bowels cat chicken cow, calf donkey duck. House hen chinchillas in barn livestock cat hogs chicks trucks. Garden windmill chicks, hen at corn in, lettus a peppers. Coo with rabbits ect. Goat goose hen horse. Mooo cat daisys, grunt in turkey coo, windmill at bull. Straw augers beef kettle our crickets. Blue berries pigeons buzz and bean prairie dogs nails at est.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Dogs nails.',
    user_id: 1,
    body:
      'Ducks in cabbage on, cauliflower irrigation Seeder onion. Lamb pig rooster sheep. Blue berries pigeons buzz and bean prairie dog.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Fertilizer',
    user_id: 1,
    body:
      'Robins peacocks an kale. Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Gobble feed',
    user_id: 1,
    body:
      'Buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Forage',
    user_id: 1,
    body:
      'Combine Harvester swather, baler as haybine parsley, melon in hay rake. Baa potato donkey mouse, at gate grain bins woof. Onion organic oranges and purr ducks canning owls at a squeal. . Hoot squeal moose quack, crows doggies frogs crickets chirp.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Bats in crows',
    user_id: 1,
    body:
      'Fertilizer, a melon chirp pets in. In quilt yearlings, gobblers pumpkin are porky pig beef, sheep rose garden sage, in pitc.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Goat goose hen horse.',
    user_id: 1,
    body:
      'Quack hammers eggplant is utters nails garden. Goose hammers cattle rats in crows. Gate wind, moonshine horses meow irrigation , with feed troughs cheep, or cabbage with pumpkin trees chicken. veterinarian blue berries cattle jelly canning. Rooster celery pineapple.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Hoot squeal moose quack',
    user_id: 1,
    body:
      'Robins peacocks an kale. Augers oats hen cowpies. Quack hammers eggplant is utters nails garden. Bulls at rose garden cucumber.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  },
  {
    review_id: 1,
    product_id: 1,
    created: 182889,
    title: 'Grapes nest pitch fork',
    user_id: 1,
    body:
      'Buzz, purr meow cheep chinchillas squeak, seeds maple syrup worms, potato alligators grunt are at bees. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies. veterinarian blue berries cattle jelly canning.',
    verified: true,
    stars: 1,
    style: '',
    helpfuls: 1
  }
];

seederFunc();

module.exports = data;
