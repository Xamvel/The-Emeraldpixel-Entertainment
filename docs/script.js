"use strict";
// Embedded demo JSON (from demo_data/data.json)
//steam version
let sizeSuffixes = ['B','KB','MB','GB']; //possible game Sizes
let DEMO_JSON = [

{
  "category":"game",
  "unique_id":2,
  "base_mod_uid" : 8,
  "name":"Alma Drifters",
  "Author":"User2",
  "Game.1":"Outerra",
  "Category":"Maps",
  "description":"Race through neon-lit cities and mountain roads while upgrading your cars and mastering high-speed drifting mechanics.",
  "Tags":"Cosmetic, Custom, Modpack",
  "release_date":"2023-04-12",
  "time_modified":"2023-07-22",
  "disk_size":906000,
  "Subscriptions":0,
  "Favorites":0,
  "Views":0,
  "RatingScore":0,
  "NumberOfRatings":0,
  "Version":0,
  "Dependencies":"None",
  "Compatibility":"Outerra",
  "WorkshopURL":null,
  "thumbnail_image":"demo_data/img/DTM_Mercedes_W204_DiResta09_amk.jpg",
  "PreviewListImageURL":"demo_data/img/DTM_Mercedes_W204_DiResta09_amk.jpg",
  "banner_image":"demo_data/img/DTM_Mercedes_W204_DiResta09_amk.jpg",
  "Screenshot1":null,
  "Screenshot2":null,
  "Screenshot3":null,
  "Video1":"demo_data/video/car_drift.mp4",
  "IsFavorite" : false,
  "Checked" : []
},

{
  "category":"game",
  "unique_id":21241451,
  "base_mod_uid" : 8,
  "name":"Emeraldrealm Shooter",
  "Author":"User2",
  "Game.1":"Outerra",
  "Category":"Maps",
  "description":"Race through neon-lit cities and mountain roads while upgrading your cars and mastering high-speed drifting mechanics.",
  "Tags":"Cosmetic, Custom, Modpack",
  "release_date":"2023-04-12",
  "time_modified":"2023-07-22",
  "disk_size":906000,
  "Subscriptions":0,
  "Favorites":0,
  "Views":0,
  "RatingScore":0,
  "NumberOfRatings":0,
  "Version":0,
  "Dependencies":"None",
  "Compatibility":"Outerra",
  "WorkshopURL":null,
  "thumbnail_image":"demo_data/img/Shooter_person_views.png",
  "PreviewListImageURL":"demo_data/img/Shooter_person_views.png",
  "banner_image":"demo_data/img/Shooter_person_views.png",
  "Screenshot1":null,
  "Screenshot2":null,
  "Screenshot3":null,
  "Video1":"demo_data/video/emeraldrealmShooter.mp4",
  "IsFavorite" : false,
  "Checked" : []
},
{
  "category":"game",
  "unique_id":2134,
  "base_mod_uid" : 1,
  "name":"Alma Drifters Reloaded",
  "Author":"User2",
  "Game.1":"Outerra",
  "Category":"Maps",
  "description":"An expanded version of Alma Drifters featuring new tracks, improved graphics, and competitive online races.",
  "Tags":"Cosmetic, Custom, Modpack",
  "release_date":"2023-04-12",
  "time_modified":"2023-07-22",
  "disk_size":906436,
  "Subscriptions":0,
  "Favorites":0,
  "Views":0,
  "RatingScore":0,
  "NumberOfRatings":0,
  "Version":0,
  "Dependencies":"None",
  "Compatibility":"Outerra",
  "WorkshopURL":null,
  "thumbnail_image":"demo_data/img/Peugeot_206_WRC.jpg",
  "PreviewListImageURL":"demo_data/img/Peugeot_206_WRC.jpg",
  "banner_image":"demo_data/img/Peugeot_206_WRC.jpg",
  "Screenshot1":null,
  "Screenshot2":null,
  "Screenshot3":null,
  "Video1":"demo_data/video/car_drift.mp4",
  "IsFavorite" : false,
  "Checked" : []
},

{
  "category":"game",
  "unique_id":3,
  "base_mod_uid" : 1,
  "name":"Wilderness of Emygmian",
  "Author":"User3",
  "Game.1":"Outerra",
  "Category":"Models",
  "description":"Gather resources, craft equipment, and survive dangerous nights in a harsh wilderness full of hidden secrets.",
  "Tags":"Survival, Cosmetic",
  "release_date":"2022-03-21",
  "time_modified":"2023-01-30",
  "disk_size":21463.72,
  "Subscriptions":0,
  "Favorites":0,
  "Views":0,
  "RatingScore":0,
  "NumberOfRatings":0,
  "Version":0,
  "Dependencies":"mod004",
  "Compatibility":"Outerra",
  "WorkshopURL":null,
  "thumbnail_image":"demo_data/img/PIA23605_-_The_Exotic_Marble.jpg",
  "PreviewListImageURL":"demo_data/img/PIA23605_-_The_Exotic_Marble.jpg",
  "banner_image":"demo_data/img/PIA23605_-_The_Exotic_Marble.jpg",
  "Screenshot1":null,
  "Screenshot2":null,
  "Screenshot3":null,
  "Video1":"demo_data/video/exoticPlanet.mp4",
  "IsFavorite" : false,
  "Checked" : []
},

{
  "category":"game",
  "unique_id":4,
  "base_mod_uid" : 1,
  "name":"Mars Rover Simulation",
  "Author":"User4",
  "Game.1":"Outerra",
  "Category":"Models",
  "description":"Explore the world of mars the way A Mars Rover does",
  "Tags":"Coop, Modpack, HD, Balance",
  "release_date":"2022-02-23",
  "time_modified":"2023-03-29",
  "disk_size":2136436.61,
  "Subscriptions":0,
  "Favorites":0,
  "Views":0,
  "RatingScore":0,
  "NumberOfRatings":0,
  "Version":0,
  "Dependencies":"None",
  "Compatibility":"Outerra",
  "WorkshopURL":null,
  "thumbnail_image":"demo_data/img/NASA_Mars_Rover.jpg",
  "PreviewListImageURL":"demo_data/img/NASA_Mars_Rover.jpg",
  "banner_image":"demo_data/img/NASA_Mars_Rover.jpg",
  "Screenshot1":null,
  "Screenshot2":null,
  "Screenshot3":null,
  "Video1":"demo_data/video/nasaMarsRover.mp4",
  "IsFavorite" : false,
  "Checked" : []
},

{
  "category":"game",
  "unique_id":5,
  "base_mod_uid" : 1,
  "name":"Year 3066",
  "Author":"User5",
  "Game.1":"Outerra",
  "Category":"Models",
  "description":"Travel through lands far away, battle against spaceships, and uncover hidden mysteries in this scifi adventure.",
  "Tags":"Fantasy, Custom, Cosmetic, Modpack",
  "release_date":"2021-02-25",
  "time_modified":"2021-04-29",
  "disk_size":312555555.87,
  "Subscriptions":0,
  "Favorites":0,
  "Views":0,
  "RatingScore":0,
  "NumberOfRatings":0,
  "Version":0,
  "Dependencies":"None",
  "Compatibility":"Outerra",
  "WorkshopURL":null,
  "thumbnail_image":"demo_data/img/spacecraft.png",
  "PreviewListImageURL":"demo_data/img/spacecraft.png",
  "banner_image":"demo_data/img/spacecraft.png",
  "Screenshot1":null,
  "Screenshot2":null,
  "Screenshot3":null,
  "Video1":"demo_data/video/warships.mp4",
  "IsFavorite" : false,
  "Checked" : []
  },

{
  "category":"game",
  "unique_id":666,
  "base_mod_uid" : 1,
  "name":"Mischievous cat chaos ",
  "Author":"User6",
  "Game.1":"Outerra",
  "Category":"Maps",
  "description":"Play as a mischievous cat causing chaos across apartments, streets, and shops in a humorous physics-based world.",
  "Tags":"Survival, HD, Cosmetic, Coop",
  "release_date":"2021-06-02",
  "time_modified":"2021-09-15",
  "disk_size":878.79505,
  "Subscriptions":0,
  "Favorites":0,
  "Views":0,
  "RatingScore":0,
  "NumberOfRatings":0,
  "Version":0,
  "Dependencies":"None",
  "Compatibility":"Outerra",
  "WorkshopURL":null,
  "thumbnail_image":"demo_data/img/Curious_cat_starring_at_a_lizard.jpg",
  "PreviewListImageURL":"demo_data/img/Curious_cat_starring_at_a_lizard.jpg",
  "banner_image":"demo_data/img/Curious_cat_starring_at_a_lizard.jpg",
  "Screenshot1":null,
  "Screenshot2":null,
  "Screenshot3":null,
  "Video1":"demo_data/video/Cat_playing_with_a_lizard.webm",
  "IsFavorite" : false,
  "Checked" : []
},

{
  "category":"game",
  "unique_id":6666,
  "base_mod_uid" : 1,
  "name":"Mischievous cat chaos Ultimate",
  "Author":"User6",
  "Game.1":"Outerra",
  "Category":"Maps",
  "description":"The ultimate cat simulator with larger maps, more destruction, multiplayer support, and hundreds of interactive objects.",
  "Tags":"Survival, HD, Cosmetic, Coop",
  "release_date":"2021-06-02",
  "time_modified":"2021-09-15",
  "disk_size":87815596462151,
  "Subscriptions":0,
  "Favorites":0,
  "Views":0,
  "RatingScore":0,
  "NumberOfRatings":0,
  "Version":0,
  "Dependencies":"None",
  "Compatibility":"Outerra",
  "WorkshopURL":null,
  "thumbnail_image":"demo_data/img/Cat_playing_with_a_lizard.jpg",
  "PreviewListImageURL":"demo_data/img/Cat_playing_with_a_lizard.jpg",
  "banner_image":"demo_data/img/Cat_playing_with_a_lizard.jpg",
  "Screenshot1":null,
  "Screenshot2":null,
  "Screenshot3":null,
  "Video1":"demo_data/video/Cat_playing_with_a_lizard.webm",
  "IsFavorite" : false,
  "Checked" : []
},

  {
    "category":".template",
    "base_mod_uid" : 1,
    "unique_id":211,
    "name":"First cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/26.jpg",
    "PreviewListImageURL":"demo_data/img/26.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 1,
    "unique_id":212,
    "name":"2nd cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/27.jpg",
    "PreviewListImageURL":"demo_data/img/27.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 7,
    "unique_id":213,
    "name":"3th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/28.jpg",
    "PreviewListImageURL":"demo_data/img/28.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 7,
    "unique_id":214,
    "name":"4th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/29.jpg",
    "PreviewListImageURL":"demo_data/img/29.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 8,
    "unique_id":215,
    "name":"5th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/30.jpg",
    "PreviewListImageURL":"demo_data/img/30.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 9,
    "unique_id":216,
    "name":"6th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/31.jpg",
    "PreviewListImageURL":"demo_data/img/31.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 9,
    "unique_id":217,
    "name":"7th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/32.jpg",
    "PreviewListImageURL":"demo_data/img/32.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 9,
    "unique_id":218,
    "name":"8th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/33.jpg",
    "PreviewListImageURL":"demo_data/img/33.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 9,
    "unique_id":219,
    "name":"9th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/34.jpg",
    "PreviewListImageURL":"demo_data/img/34.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 9,
    "unique_id":2110,
    "name":"10th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/35.jpg",
    "PreviewListImageURL":"demo_data/img/35.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 9,
    "unique_id":211590,
    "name":"11th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/36.jpg",
    "PreviewListImageURL":"demo_data/img/36.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 9,
    "unique_id":24620,
    "name":"12th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/37.jpg",
    "PreviewListImageURL":"demo_data/img/37.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 9,
    "unique_id":2100010,
    "name":"13th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/38.jpg",
    "PreviewListImageURL":"demo_data/img/38.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  },
  {
    "category":".template",
    "base_mod_uid" : 9,
    "unique_id":211880,
    "name":"14th cat",
    "Author":"User21",
    "Game.1":"Outerra",
    "Category":"Models",
    "Tags":"Balance, Multiplayer, Survival, Fantasy",
    "release_date":"2021-06-02",
    "time_modified":"2021-09-15",
    "disk_size":2.35,
    "Subscriptions":0,
    "Favorites":0,
    "description":"LLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl",
    "Views":0,
    "RatingScore":0,
    "NumberOfRatings":0,
    "Version":0,
    "Dependencies":"None",
    "Compatibility":"Outerra",
    "WorkshopURL":null,
    "thumbnail_image":"demo_data/img/39.jpg",
    "PreviewListImageURL":"demo_data/img/39.jpg",
    "banner_image":"demo_data/img/26.jpg",
    "Screenshot1":null,
    "Screenshot2":null,
    "Screenshot3":null,
    "Video1":null,
    "IsFavorite" : false
  }
];
//todo steam version modal window above everything
let DEMO_SESSION_JSON = [
  {
    session_name: "Chapter4 : Jozo IN WASTELAND",
    mod_unique_id: "1",
    template_unique_id: "212",
    session_unique_id: "-WP7rVFbKiZj77+w5KxG",
    save_time: "Wed Jan 21 1970 12:52:07 GMT+0100 (Central European Standard Time)",
    is_user_saved_session: true,
    enabled_mods: [2, 4, 6, 11, 17, 1717],
    thumbnail_image: "demo_data/img/scenery.jpg",
    elapsed_time: '6h:14m',
    custom_text: 'LEVEL 16 ASSASSIN',
  },
  {
    session_name: ".current_session",
    mod_unique_id: "1",
    template_unique_id: "212",
    session_unique_id: "zU4WQcnunWl-ts9Utm5C",
    save_time: "Wed Jan 21 1970 12:52:06 GMT+0100 (Central European Standard Time)",
    is_user_saved_session: false,
    enabled_mods: [3, 5, 12, 18],
    thumbnail_image: "demo_data/img/sceneryPolar.jpg",
    elapsed_time: '7h:7m',
    custom_text: 'LEVEL 20 MAGICIAN',
  },
  {
    session_name: "Chapter42 : Jozo IN WILDERMORE",
    mod_unique_id: "1",
    template_unique_id: "212",
    session_unique_id: "3Kv7pf67JAoY8gHF8EFH",
    save_time: "Wed Jan 21 1970 12:52:07 GMT+0100 (Central European Standard Time)",
    is_user_saved_session: true,
    enabled_mods: [2134, 666, 14, 20],
    thumbnail_image: "demo_data/img/scenery.jpg",
    elapsed_time: '99h:14m',
    custom_text: 'LEVEL 85 MARINER',
  },
  {
    session_name: "Chapter6 : Jozo IN JUNKTOWN",
    mod_unique_id: "1",
    template_unique_id: "211",
    session_unique_id: "oZ6LbQcZBcqkrsjeMW5q",
    save_time: "Wed Jan 21 1970 12:52:07 GMT+0100 (Central European Standard Time)",
    is_user_saved_session: true,
    enabled_mods: [2, 2134, 3, 4, 5, 6, 666, 6666, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1717],
    thumbnail_image: "demo_data/img/scenery.jpg",
    elapsed_time: '8h:3m',
    custom_text: 'LEVEL 18 ASSASSIN',
  },
  {
    session_name: "Chapter6 : Jozo IN JUNKTOWN",
    mod_unique_id: "1",
    template_unique_id: "211",
    session_unique_id: "ooZ6LbQcZBcqkrsjeMW5q",
    save_time: "Wed Jan 21 1970 12:52:07 GMT+0100 (Central European Standard Time)",
    is_user_saved_session: true,
    enabled_mods: [2, 2134, 3, 4, 5, 6, 666, 6666, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1717],
    thumbnail_image: "demo_data/img/scenery.jpg",
    elapsed_time: '8h:4m',
    custom_text: 'LEVEL 18 ASSASSIN',
  },
  {
    session_name: "Chapter7: Jozo IN BACKLUND",
    mod_unique_id: "1",
    template_unique_id: "212",
    session_unique_id: "zzzU4WQcnunWl-ts9Utm5C",
    save_time: "Wed Jan 21 1970 12:52:06 GMT+0100 (Central European Standard Time)",
    is_user_saved_session: false,
    enabled_mods: [3, 5, 12, 18],
    thumbnail_image: "demo_data/img/sceneryPolar.jpg",
    elapsed_time: '7h:7m',
    custom_text: 'LEVEL 20 MAGICIAN',
  }

]
// var SESSION_JSON = [];
// DEMO_SESSION_JSON.forEach(session =>{
//   SESSION_JSON[session.session_unique_id] = session;
// })

class Stack{
  constructor(){
      this.items = [];
      this.count = 0;
  }
  push(element){
      this.items[this.count] = element;
      this.count++;
      //console.log(element + " was added to the stack, now the size is  " + this.count);
      return element;
  }
  pop(){
      if(this.count == 0)return 'nothing to remove';
      //console.log(this.items[this.count-1] + " was removed");
      this.count--;
      return this.items[this.count];
  }
  //finds current top element
  top(){
      //console.log('current top element in stack is ' + this.items[this.count-1]);
      return this.items[this.count -1];
  }
  clean(){
    this.count = 0;
  }
}
const GAME_JSON_Mods = {};
const MODS_DICT = {};


//api given
var $mod;
var $query_interface;
var isModUsed = true;

//magic that should make it so you can reload inside of steam with ctrl + f3
if (!$mod && $query_interface){
  $mod = $query_interface("oti::js::mod_manager.get");
}
if (!$mod) {
  $mod = {
    get_mod_list: function() { return DEMO_JSON; },
    launch_session: function() {},
    get_mod_session_list : function() {return[]}
  }
  isModUsed = false;
}
  
//if we are in steam, api is taken, otherwise just the demo
const MOD_JSON = $mod.get_mod_list();
//console.log(MOD_JSON);

let i = 1;
MOD_JSON.forEach(card => {
  //get only games from MOD_JSON for later usage
  if(card.category == "game"){
    GAME_JSON_Mods[card.unique_id] = {};
  }
  //everything, where you get the corresponding card by ID
  MODS_DICT[card.unique_id] = card;


});
//date formatter
function formatDate(date) {
  // Extract parts
  const day = date.getDate();
  const month = date.getMonth() + 1; // 0-based
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Function to add leading zero
  function pad(number) {
  return number.toString().padStart(2, "0");
  }

  // Build formatted string
  const formatted =
  pad(day) + "." +
  pad(month) + "." +
  year + " " +
  pad(hours) + ":" +
  pad(minutes) + ":" +
  pad(seconds);

  return formatted;
}



//define attributes
let activeRoute = 'library';
const playView = document.getElementById("view-play");
const libraryView = document.getElementById("view-library");
let router = new Stack();

//show a new View (play/library...)
function showView(route, scrollpos){
  const app = document.getElementById('app');
  //checks which of the main sections to toggle active
  document.querySelectorAll('#app > section').forEach(section => {
    const isActive = section.dataset.view === route;
    //give out the active class and toggle hidden
    
    section.classList.toggle('active', isActive);
    section.toggleAttribute('hidden', !isActive);
  });
  if(scrollpos){
    app.scrollTo(0, scrollpos);
  };
  activeRoute = route;
  
  //highlight the button of the view that's being used
  document.querySelectorAll('.nav-btn').forEach(button => {
    const isActive = button.dataset.route === route;
    button.classList.toggle('active',isActive);
    if(isActive){
      button.setAttribute('aria-current','page');
      router.clean();
      router.push(button.innerHTML.toLowerCase());
    }else{
      button.removeAttribute('aria-current');
    }
})


   //when you changed favorites in the list view, this will get triggered to change the sort once you click away from list view
   if (favoritesChangedSinceLastView) {
    const sortSelect = document.querySelector(".sort-select");
    sortSelect.dispatchEvent(new Event("change", { bubbles: true }));
    favoritesChangedSinceLastView = false;
    }
}
//nav-button listener

document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', () =>{
    const route = button.dataset.route;
    //console.log(route);
    
    if(route != router.top()){
      let banned = ['start-container', 'about-container','license-container','contact-container','settings','privacy-container','accessibility-container'];
      banned.includes(route) ? hideActionButtons(allActionButtons) : showActionButtons(allActionButtons); //hides searcher, grid/list view and sorter if settings pressed
      showView(route);
    }
  })
})
//sort-select listener
const select = document.querySelector(".sort-select");
select.addEventListener("change",function(){
  const value = select.value;
  switch (value){
    case "az":
      sorter(MOD_JSON,true); // true = ascending
      break;
    case "za":
      sorter(MOD_JSON,false)
      break;
    case "release":
      sorter(MOD_JSON,true,"release_date"); 
      break;
    case "updated":
      sorter(MOD_JSON,true,"time_modified");
      break;
    case "size":
      sorter(MOD_JSON,true,null,'Size');
      break;  
  } 

})
// prioritizing when clicking star
var prioritizing = true;
const starBttn = document.querySelector("#favoritePriority");
starBttn.addEventListener("click", () => {
  starBttn.classList.toggle('active');
  const pressed = starBttn.classList.contains('active');
  starBttn.textContent = pressed ? '★' : '☆';
  prioritizing = !prioritizing;
  const select = document.querySelector(".sort-select");
  select.dispatchEvent(new Event("change"));  // simulate a user change to apply sorting
})

function sorter(arrOfObjects, ascending,date,size){
  //sorting function: a,b negative number -> a is before b pos -> a is after b
  arrOfObjects.sort((a,b) =>{
    //if prioritizing is enabled put the first favorites on top
    if (prioritizing && a.IsFavorite != b.IsFavorite){ 
      return a.IsFavorite ? -1 : 1;
      }
    if(size != null)return b.disk_size - a.disk_size;
    if(date == null)return ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name); //localeCompare -> -1 if sorted before + 1 if sorted after, 0 if equal 
    else if(date === "release_date"){
      return  new Date(b.release_date) - new Date(a.release_date);
    }else if(date === "time_modified"){
      return  new Date(b.time_modified) - new Date(a.time_modified);
    }
  })
  const search = document.querySelector(".search-input");

  renderLibrary();
  initViews();
  
  searchDisplayer(cardsPlay,search.value,true); // all cards + event + grid/list
  searchDisplayer(cardsLibrary,search.value,true);
  searchDisplayer(cardsPlayList,search.value,false);
  searchDisplayer(cardsLibraryList,search.value,false);
}

//define click handlers used in templates in Detail
const app = document.getElementById('app');
function templateClick(cardInfo){
  //shorten the values needed from cardInfp
  const item = cardInfo.item;
  const templateCard = cardInfo.templateCard;
  const body = cardInfo.body;
  const rightPanel = cardInfo.rightPanel;
  const imgHolder = cardInfo.imgHolder;
  const h1Holder = cardInfo.h1Holder;
  const descHolder = cardInfo.descHolder;

  rightPanel.style.display = ''; //unhide it if it was hidden
  if(!templateCard) return;
  //heading
  const h1 = document.createElement('h2');
  h1.classList.add('template-header');
  h1.textContent = templateCard.textContent;
  
  const allTemplates = document.querySelectorAll('.template-row');
  allTemplates.forEach(el =>{
    el.classList.remove('selected');
  })
  templateCard.classList.add('selected');
  const tempId = templateCard.className.split(' ')[1];
  const foundItem = MOD_JSON.find(card => card.unique_id == tempId );
  const img = document.createElement("img");
  img.src = foundItem.thumbnail_image;
  img.classList.add('img-template')

  //description
  const descSubheading = document.createElement('div');
  descSubheading.className = 'detail-subheading';
  descSubheading.textContent = 'description';

  const desc = document.createElement('p');
  desc.className = 'detail-description';
  desc.textContent = item.description;

  //remove the previous one before adding new ones
  h1Holder.innerHTML = '';
  h1Holder.appendChild(h1);
  imgHolder.innerHTML = '';
  imgHolder.appendChild(img);
  descHolder.innerHTML = '';
  descHolder.appendChild(descSubheading);
  descHolder.appendChild(desc);
  rightPanel.appendChild(h1Holder);
  rightPanel.appendChild(imgHolder);
  rightPanel.appendChild(descHolder);

  body.appendChild(rightPanel);
}
//clicker in play view
function handlePlayClick(e){
    const card = e.target.closest('.game-card, .game-row');
    if(!card)return;
    renderDetail(card.dataset.id,app.scrollTop);
  }
//clicker in library view  
function handleLibraryClick(e){
    const card = e.target.closest('.game-card, .game-row');
    if(!card)return;
    renderDetail(card.dataset.id,app.scrollTop);
  }
  
function renderPlay(){ //renders every card in play
  let rememberRoute = activeRoute;
  //give renderPlay activeRoute to write inside it and return it falls it wasnt an active route b4
  let isPlay = activeRoute === 'play' ? true : false;
  activeRoute = 'play';

  //removing the views because of creating them new when sorting 
  const view = document.getElementById('view-'+activeRoute);
  const gridView = document.getElementById('view-'+activeRoute + '-grid');
  const listView = document.getElementById('view-'+activeRoute + '-list');
  gridView.innerHTML = '';
  listView.innerHTML = '';

  MOD_JSON.forEach(item => {
    if(item.category === "game"){
      renderCard(item);
    }
  })
  //remember activeRoute
  if(!isPlay) activeRoute = rememberRoute;
  view.removeEventListener('click', handlePlayClick);
  view.addEventListener('click', handlePlayClick);
}
function renderLibrary(){ //renders every card in library
  //give renderLibrary activeRoute to write inside it and return it if it wasnt an active route b4
  let rememberRoute = activeRoute;
  let isLibrary = activeRoute === 'library' ? true : false;
  activeRoute = 'library';
  const view = document.getElementById('view-'+activeRoute);

  //removing the views because of creating them new when sorting
  const gridView = document.getElementById('view-'+activeRoute + '-grid');
  const listView = document.getElementById('view-'+activeRoute + '-list');
  gridView.innerHTML ='';
  listView.innerHTML ='';

  MOD_JSON.forEach(item => {
    if(item.category.charAt(0) != ".")  renderCard(item);
  })
  if(!isLibrary) activeRoute = rememberRoute; //give active route back

  view.removeEventListener('click', handleLibraryClick);
  view.addEventListener('click', handleLibraryClick);

}
function renderSettings(){
  const view = document.getElementById('view-settings');
  view.innerHTML = '';
  view.innerHTML = `
  <section class="settings-section">
    <h2 class="settings-title">Graphics</h2>
    <div class="settings-body">
      <label>
        Quality
        <select>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="ultra">Ultra</option>
        </select>
      </label>

      <label>
        <input type="checkbox">
        VSync
      </label>
    </div>
  </section>

  <section class="settings-section">
    <h2 class="settings-title">Audio</h2>
    <div class="settings-body">
      <label>
        Master
        <input type="range" min="0" max="1" step="0.01">
      </label>
    </div>
  </section>
`
}

function renderStart(){
  hideActionButtons(allActionButtons);
  const view = document.getElementById("start-container");
  showView("start-container");


  //const title = document.createElement('h1');

  //title.textContent = 'let us begin';

  //view.appendChild(title);

}
function renderAboutUs(){
  hideActionButtons(allActionButtons);
  showView("about-container");
}
function renderLizenz(){
  hideActionButtons(allActionButtons);
  showView("license-container");
}
function renderContact(){
  hideActionButtons(allActionButtons);
}
function renderContact(){
  hideActionButtons(allActionButtons);
}
function renderPrivacy(){
  hideActionButtons(allActionButtons);
  showView("privacy-container");

}
function renderAll(){
  renderStart();
  renderLibrary();
  renderAboutUs();
  renderLizenz();
  renderContact();
  renderPrivacy();

}
let accessibilityButton = document.querySelector(".hero-link-btn.AccessibleButton");
let accessibility = document.querySelector(".accessibility-container");
accessibilityButton.addEventListener('click',()=>{
  showView("accessibility-container");
})

let privacyButton = document.querySelector(".hero-link-btn.PrivateButton");
let privacy = document.querySelector(".privacy-container");
privacyButton.addEventListener('click',()=>{
  showView("privacy-container");
})

function renderDetail(card,scrollPosition){
  hideActionButtons(allActionButtons); //hides searcher, grid/list view and sorter
  showView('detail'); //changes theview to detail
  router.push('detail');

  //look through MOD_JSON to find the position of the unique_id
  const cardID = card.replace("json-", "");

  const item = MODS_DICT[cardID];
  const title = item.name;
  const container = document.getElementById('view-detail');
  container.innerHTML ='';
  const panel = document.createElement('section');
  panel.className = 'detail-panel';
  const imgSrc = item.thumbnail_image;
  //time
  const dataModified = new Date(item.time_modified);

  const formattedDate = dataModified.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short", //jan-dec
    year: "numeric"
  })
  const size = item.disk_size;
  
  const sizeUnit = sizeFormat(size,0); // the number is the position of default size in arr sizeSuffixes 0 -> B
  let onlyGames = item.category === "game" ? `
        <div class="detail-actions-left">
          <button type="button" class="btn small" data-action="new-game">Play Game</button>
          <button type="button" class="btn small" data-action="new-game">Buy Premium</button>
        </div> ` : '';

  panel.innerHTML =
    `<div class="detail-col-left">
        <div class="detail-back">
          <button type="button" class="btn-detail-back" aria-label="Back to library">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
            </svg>
            <span>Back</span>
            <button type="button" class="fav-btn" aria-label="Toggle favorite">☆</button>
          </button>
        </div>
        <div class="detail-media"><img class = "game-cardd" src="${imgSrc}" alt="${title}"></div>
        

        ${onlyGames}
        <div class="detail-meta-list">
          <div class="kv"><span class="k">Date Modified</span><span class="v">${formattedDate}</span></div>
          <div class="kv"><span class="k">Size</span><span class="v">${sizeUnit}</span></div>
        </div>
      </div>
      <div class="detail-body">
        <h3 class="detail-title">${title}

        </h3>
        <div class="detail-subheading">Description</div><p class="detail-description">${item.description}</p>
        <video class="detail-video" controls>
          <source src="${item.Video1}" type="video/webm">
        </video>
      </div>`
  container.appendChild(panel);

  const backButton = document.querySelector(".btn-detail-back");
  if(backButton){ //if backbutton exists, meaning if it is an active Element
    backButton.addEventListener("click", () => {
      router.pop(); //pop out of the current view

      showView(router.top(), scrollPosition); //shows the view before the detail view was pressed
      if(activeRoute != 'detail'){
        showActionButtons(allActionButtons); //shows searcher, grid/list view and sorter again
      }
      //make sure you can display elements in detail that were hidden b4 but only for games
      if(item.category != "game")return;

      document.querySelectorAll(makePlace.join(',')).forEach(el =>{
        el.style.display = '';
        })
      //hides your pages after backing  
      newGamePage.style.display = 'none';
      //loadGameRight.style.display = 'none';
      loadGameLeft.style.display = 'none';
      rightPanel.style.display = 'none';
      controlsContainer.style.display = 'none';
      //playBttnLoadGame.style.display = 'none'
      loadGameLeft.style.display = 'none'

      //remove active element from loadGame
      detailPanel.classList.remove('loadGame-active');
      });
  }
  //favorite button
  var favButton = document.querySelector(".fav-btn");
  //const isFav = item.IsFavorite === true ? true : false;
  if(item.IsFavorite){
    favButton.textContent = '★';
    favButton.classList.toggle('active');
  }

  const elements = document.querySelectorAll(`[data-id="${card}"]`);

  favButton.addEventListener("click", () => {
    favButton.textContent = item.IsFavorite ? '☆' : '★';
    favButton.classList.toggle('active');
    elements.forEach(el => {  // give the myFavorite tag to all occurances of data-id so that all are highlighted in all views
      el.classList.toggle("myFavorite");
    });
    item.IsFavorite = !item.IsFavorite;
    const select = document.querySelector(".sort-select");
    select.dispatchEvent(new Event("change"));  // simulate a user change to apply sorting
    }
  );

  if((item.category === "game")) return;
  const newGame = document.querySelector('[data-action="new-game"]');
  const makePlace = ['.detail-title','.detail-description','.detail-subheading','.fav-btn','.detail-media','.detail-actions-left','.detail-meta-list'];
  
  //new Game
  const body = document.querySelector('.detail-body'); //contains right side of the detail window
  const leftPanel = document.querySelector('.detail-col-left');
  const newGameHeading = document.createElement('h3');
  const newGamePage = document.createElement('div');
  newGameHeading.textContent = "New Game";
  newGameHeading.classList.add('left-panel');

  newGamePage.appendChild(newGameHeading);
  leftPanel.appendChild(newGamePage);

  newGamePage.style.display = 'none';

  const templateList = document.createElement('div');
  templateList.className = 'templates-list'; //holder of templates
  const modsList = document.createElement('div');
  modsList.className = 'templates-list'; //holder of mods
  
  const rightPanel = document.createElement('div');
  rightPanel.className = 'right-panel';
  body.appendChild(rightPanel);
  //add holders which will get used for adding stuff to the right side of the new game window for templates
  const imgHolder = document.createElement('div'); //holder for the image in detail
  imgHolder.className = 'img-holder';

  const h1Holder = document.createElement('div'); 
  h1Holder.className = 'h1-holder';

  const descHolder = document.createElement('div'); 
  descHolder.className = 'descHolder-holder';

  //add play and mods Button
  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'detail-controls';
  body.appendChild(controlsContainer);

  const playButtonDetail = document.createElement('button');
  playButtonDetail.className = 'btn small play-button-detail';
  playButtonDetail.textContent = 'Play';
  playButtonDetail.dataset.action = 'launch';

  const mods = document.createElement('button');
  mods.className = 'btn small mods-button-detail';
  mods.textContent = 'Mods';
  mods.dataset.action = 'launch';

   //stats given when you click play, already filled then in other functions
  var clickdTemplate = ""; //define the clicked template 
  var arrayOfModsForGame = []; //array of the strings with IDs of the mods selected for the game
  
  function onPlayClick(session_unique_id){ 
    if(!isModUsed) return;
    if(!session_unique_id){
      session_unique_id = "";
    }
    var ret = $mod.launch_session({ //ret = return status
      game_mod_uid: item.unique_id,
      template_mod_uid : clickdTemplate,
      saved_session_uid : session_unique_id,
      enabled_mod_uids : arrayOfModsForGame, 
      continue_last_session : false
    });
    if (!ret.$ret){
      console.error('connection failed ' + ret.errors_out);
    }else{
      ret.errors_out;
      window.close();
    }
  }
  playButtonDetail.addEventListener('click', onPlayClick);

  controlsContainer.appendChild(mods);
  controlsContainer.appendChild(playButtonDetail);
  controlsContainer.style.display = 'none';

  //create a window for mods MODAL
  const modalContainer = document.querySelector('#modal-container');
  modalContainer.innerHTML ='';
  const modalBody = document.createElement('div');
  modalBody.classList.add('modal');

  const modalButtons = document.createElement('div');
  modalButtons.classList.add('modalButtons');
  modalBody.appendChild(modalButtons);

  //headline
  const modalh1 = document.createElement('h1');
  modalh1.textContent = 'Choose mods';
  //close button - done
  const modalCloseButton = document.createElement('button');
  modalCloseButton.textContent = 'done';
  modalCloseButton.classList.add('close-Button');
  modalContainer.appendChild(modalBody);
  modalButtons.appendChild(modalh1);
  //div class for the cards
  const modalCards = document.createElement('div');
  modalCards.classList.add('modalCards');
  modalBody.appendChild(modalCards);
  modalBody.appendChild(modalCloseButton);

  //create a searcher for mods
  const searchWindow = document.createElement('input');
  searchWindow.type = "search";
  searchWindow.classList.add('search-input')
  searchWindow.placeholder = "Search mods...";

  modalButtons.appendChild(searchWindow);

  var firstRow = null; 
  //call list function to list mods for the body of the modal window
  MOD_JSON.forEach(el =>{
    if(el.base_mod_uid != cardID && el.base_mod_uid != "" ) return;
    if(el.category == "mod"){
      //format date
      const release = new Date(el.release_date); //last modified
      const lastUpdateDate = new Date(el.time_modified); //release date
      const releaseDateFormatted = release.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short", //jan-dec
        year: "numeric"
      })
      const formattedlastUpdateDate = lastUpdateDate.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short", //jan-dec
        year: "numeric"
      });
      const currentSize = el.disk_size; //size in Bytes
      const currentSizeUnit = sizeFormat(currentSize,0); // the number is the position of default size in arr sizeSuffixes 0 -> B

      const cardData = {
        item : el,
        title : el.name,
        releaseDate: releaseDateFormatted,
        lastUpdate : formattedlastUpdateDate,
        size : currentSizeUnit
      }
      //save the unique_id of the card that got clicked to get to details 
      const playCardID = item.unique_id; //id of the game attached to the template 
      renderList(cardData,modalCards,playCardID);
    }
    //also create a templates window
    if(el.category.startsWith('.') && el.base_mod_uid == item.unique_id){
      const templateRow = document.createElement('div');
      templateRow.className = 'template-row';
      const templateName = document.createElement('span');
      templateName.textContent = el.name;
      templateName.className = 'template-name';
      templateRow.classList.add(el.unique_id); // add id

      templateRow.appendChild(templateName);
      templateList.appendChild(templateRow);
      if(!firstRow){
        firstRow = templateRow;
        clickdTemplate = el.unique_id;
      }
      //change the right side
      templateRow.addEventListener('click',(e) =>{
        const templateCard = e.currentTarget.closest('.template-row');
        const cardInfo = {
          item,
          body,
          templateCard,
          rightPanel,
          imgHolder,
          h1Holder,
          descHolder,
        };
        templateClick(cardInfo); // body = right side
        clickdTemplate = el.unique_id; //change the id of the current clickd Template
      });
    }
  });
  
  //new Game
  newGamePage.appendChild(templateList);
  newGame.addEventListener('click',function(){
    controlsContainer.style.display = ''; //play/mods buttons
    document.querySelectorAll(makePlace.join(',')).forEach(el =>{
      el.style.display = 'none';
    })
    const templateCard = document.querySelector('.template-row');
    const cardInfo = {
      item,
      body,
      templateCard,
      rightPanel,
      imgHolder,
      h1Holder,
      descHolder,
    };
    templateClick(cardInfo);
    router.push('New Game');
    newGamePage.style.display = '';
  })
  //search window for mods
  const modsCards = modalBody.querySelectorAll('div.game-row');
  searchWindow.addEventListener('input',(e) =>{
    if(e.target.value == 'Escape'){
    e.target.value = '';
    }
    searchTimeoutId = setTimeout(() =>{
      const value = e.target.value;
      searchDisplayer(modsCards,value,false);
    },200);
  })
  //click event
  mods.addEventListener('click', () =>{
    router.push('modalWindow');
    modalContainer.toggleAttribute('hidden');
  })
  //create heading for mods  
  const selectedModsHeading = document.createElement('h3');
  selectedModsHeading.textContent = "Selected Mods";
  selectedModsHeading.classList.add('left-panel-Mods');

  newGamePage.appendChild(selectedModsHeading);
  //mods 
  newGamePage.appendChild(modsList);
  //decide between hiding mods
  modsList.innerHTML = '';
  if(Object.keys(GAME_JSON_Mods[item.unique_id]).length >= 1){
    //unhide mods
    selectedModsHeading.style.display = '';
    modsList.style.display = '';
    Object.keys(GAME_JSON_Mods[item.unique_id]).forEach(el =>{
      const modDiv = document.createElement('div');
      modDiv.classList.add('template-row');
      const modSpan = document.createElement('div');
      modSpan.textContent = MODS_DICT[el].name;
      modSpan.classList.add('template-name');
      modDiv.appendChild(modSpan);
      modsList.appendChild(modDiv);
    })
  }else{
    selectedModsHeading.style.display = 'none';
    modsList.style.display = 'none';
  }
  // selectedModsHeading.style.display = 'none';
  // modsList.style.display = 'none';

  //close event - done
  modalCloseButton.addEventListener('click', ()=>{
    router.pop();
    modalContainer.toggleAttribute('hidden');
    searchWindow.value = ''; //reset search window after closing
    searchDisplayer(modsCards,'',false);
    modsList.innerHTML = '';
    //item.unique_id is the card that's definitely a play card
    if(Object.keys(GAME_JSON_Mods[item.unique_id]).length >= 1){
      //unhide mods
      selectedModsHeading.style.display = '';
      modsList.style.display = '';
      //for all mods pointing to a game:
      Object.keys(GAME_JSON_Mods[item.unique_id]).forEach(el =>{
        //card is the dictionary of the card itself with methods like name,unique_id...
        const card = GAME_JSON_Mods[item.unique_id][el];
        
        const modDiv = document.createElement('div');
        modDiv.classList.add('template-row');
        modDiv.classList.add('has-tooltip');

        modDiv.dataset.tooltip = card.description;
        modDiv.dataset.id= card.unique_id;

        const modSpan = document.createElement('div');
        
        modSpan.textContent = card.name;
        modSpan.classList.add('template-name');
        
        modDiv.appendChild(modSpan);
        modsList.appendChild(modDiv);

        arrayOfModsForGame.push(card.unique_id);
      })
    }else{
      selectedModsHeading.style.display = 'none';
      modsList.style.display = 'none';
    }
  }) 
  //load Game
  var leftSide = document.querySelector('.detail-col-left');

  //holder of images for load game
  let imageContainer = document.createElement('div');
  imageContainer.classList.add('detail-media');

  const loadGameLeft = document.createElement('div');
  loadGameLeft.classList.add('loadGamePage');
  loadGameLeft.style.display = 'none';
  leftSide.append(loadGameLeft);
  
  var detailPanel = document.querySelector('.detail-panel');

  //what happens when you click load game
  const loadGame = document.querySelector('[data-action="load-game"]');
  loadGame.addEventListener('click',function(){
    document.querySelectorAll(makePlace.join(',')).forEach(el =>{
      el.style.display = 'none';
    })
    imageContainer.style.display = '';
    router.push('load Game');
    loadGameLeft.style.display = '';
    loadGameLeft.innerHTML = '';
    imageContainer.innerHTML = '';
  
    //make load game page an active element so that the size can be changed
    detailPanel.classList.add('loadGame-active');
    
    let steamSessions = $mod.get_mod_session_list(cardID);
    let arrOfSessions = steamSessions.length > 0 ? steamSessions : DEMO_SESSION_JSON;
    //console.log(arrOfSessions);

    // create backdrop once for modal 
    let backdrop = document.querySelector(".modal-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop";
      loadGameLeft.appendChild(backdrop);
    }

    // track which modal is open
    let openModal = null;

    backdrop.addEventListener("click", () => {
      //hide modal window and hide back drop background
      if (openModal) openModal.style.display = "none";
      openModal = null;
      backdrop.style.display = "none";
      }
    )

    //fill out load game by going through each session
    arrOfSessions.forEach(session => {
      var savedGamesContainer = document.createElement('div');
      savedGamesContainer.classList.add('saved-games-container');
      loadGameLeft.append(savedGamesContainer);
      if(session.thumbnail_image){
        let loadImageElement = document.createElement('img');
        loadImageElement.classList.add('game-cardd');
        loadImageElement.src = session.thumbnail_image;
        loadImageElement.classList.add('load-game-image');
        savedGamesContainer.appendChild(loadImageElement);
        loadImageElement.dataset.id = session.session_unique_id;
        loadImageElement.style.display = '';
      }
      //container of mods for a game
      var templateContainer = document.createElement('div');
      templateContainer.classList.add('selected-mods-container');
      templateContainer.dataset.id = session.session_unique_id; 
      templateContainer.style.display = 'none';
      savedGamesContainer.appendChild(templateContainer);
    
      session.enabled_mods.forEach(mod =>{
        const templateRow = document.createElement('div');
        templateRow.className = 'load-Game-template';
        templateRow.classList.add('has-tooltip');
        templateRow.dataset.tooltip =  MODS_DICT[mod].description;
        templateRow.dataset.id = mod;
        templateRow.dataset.orientation = "left";

        const templateName = document.createElement('span');
        
        templateName.textContent = MODS_DICT[mod].name;
        templateName.className = 'template-name';
        templateRow.classList.add(mod); // add id

        templateRow.appendChild(templateName);
        templateContainer.appendChild(templateRow);
      })
      

      // Clicking inside the modal should NOT close it, and should not bubble to backdrop
      templateContainer.addEventListener("click", (e) => {
        e.stopPropagation();
      });

      const modsButton = document.createElement("div");
      savedGamesContainer.appendChild(modsButton);
      modsButton.classList.add("load-mods");
      modsButton.textContent = "mods";

      modsButton.addEventListener("click", (e) => {
        e.stopPropagation();
        // close previous open modal if different
        if (openModal && openModal !== templateContainer) {
          openModal.style.display = "none";
        }

        openModal = templateContainer;

        // show modal
        templateContainer.style.display = "block";

        // show backdrop to ignore clicks
        backdrop.style.display = "block";

        // card rect in viewport coords
        const rect = savedGamesContainer.getBoundingClientRect();

        templateContainer.style.left = (e.clientX - rect.x ) + "px";
        templateContainer.style.top  = (e.clientY -rect.y) + "px";

        const loadContainer = document.querySelector('.detail-panel');
        
        if(e.clientY + templateContainer.offsetHeight >= loadContainer.offsetHeight +60  ){ // if with element wie are going outside the window
          //move element left by its full width and move the element up by its full height
          templateContainer.style.transform = "translateX(-100%) translateY(-100%)";
        }else{
          //move element left by its full width
          templateContainer.style.transform = "translateX(-100%) translateY(0);";
        }
      });
      //session name
      if(session.session_name){
        var savedGameName = document.createElement('div');
        savedGameName.classList.add('saved-game-Name');
        savedGameName.textContent = session.session_name;
        savedGameName.dataset.id = session.session_unique_id;
        savedGamesContainer.appendChild(savedGameName);
      }
      
      //elapsed time
      if(session.elapsed_time){
        var playedTime = document.createElement('div');
        playedTime.classList.add('saved-game-Time');
        playedTime.textContent = session.elapsed_time;
        playedTime.dataset.id = session.session_unique_id;
        savedGamesContainer.appendChild(playedTime);
      }
      
      //custom text
      if(session.custom_text){
        var customText = document.createElement('div');
        customText.classList.add('saved-game-Custom');
        customText.textContent = session.custom_text;
        customText.dataset.id = session.session_unique_id;
        savedGamesContainer.appendChild(customText);
      }

      //saved time 
      if(session.save_time){
        const date = new Date(session.save_time);
        var savedTime = document.createElement('div');
        savedTime.classList.add('saved-Time');
        savedTime.textContent = formatDate(date);
        savedTime.dataset.id = session.session_unique_id;
        savedGamesContainer.appendChild(savedTime);
      }
      //saved template 
      if(session.template_unique_id){
        const template = MODS_DICT[session.template_unique_id];
        var savedTemplate = document.createElement('div');
        savedTemplate.classList.add('saved-Template');
        savedTemplate.textContent = "[" + template.name + "]";
        savedTemplate.dataset.id = session.template_unique_id;
        savedGamesContainer.appendChild(savedTemplate);
      }
      savedGamesContainer.addEventListener("click", (e)=>{
        //console.log("game loading");
        onPlayClick(session_unique_id);
      })
      

    })
    //logic of selecting and highlighting selected template 
    function savedGameClick(id){
      //choose the corred image
      let images = document.querySelectorAll('.load-game-image');
      images.forEach( image =>{
        if(image.dataset.id == id ){
          image.style.display = '';
        }else{
          image.style.display = 'none';
        }
      })
      //highlight the correct card
      let savedCards = document.querySelectorAll('.saved-game');
      savedCards.forEach(card =>{
        if(card.dataset.id == id){
          card.classList.add('selected');
        }else{
          card.classList.remove('selected');
        }
      })
      //choose the correct selected mods
      let modsContainer = document.querySelectorAll('.selected-mods-container');
      modsContainer.forEach(container =>{
        if(container.dataset.id == id ){
          container.style.display = '';
        }else{
          container.style.display = 'none';
        }
      })
    }
  })
  //end of detail
}

//tooltip for selected mods
const tooltip = document.getElementById('tooltip');
var currenttarget = null;

document.addEventListener('mouseover', function(e){
  //todo give size so that it can give a custom tooltip offset
  var tooltipEl = e.target.closest('.has-tooltip');
  if(!tooltipEl) return;
  var tooltipParent = tooltipEl.parentElement;
  
  var modID = tooltipEl.getAttribute('data-id');
  var card = MODS_DICT[modID];
  var orientation = tooltipEl.getAttribute('data-orientation');
  
  tooltip.textContent = card.description;
  tooltip.classList.add('is-visible');
  currenttarget = tooltipEl;
  //container element positioning
  const rect = tooltipParent.getBoundingClientRect();
  //actual element positioning
  const childRect = tooltipEl.getBoundingClientRect();
  //get the tooltip to find its width/height
  var elementWithTooltip = document.getElementById('tooltip');
  var tooltipWidth = elementWithTooltip.clientWidth;
  var tooltipHeight = elementWithTooltip.clientHeight;
  //tooltip should move left/right/top/bottom so that it's fully visible
  if(orientation == "left"){
    const rect = tooltipParent.getBoundingClientRect();
    var rectStart = rect.left - tooltipWidth; //element left edge - width of tooltip
  }else{
    var rectStart = rect.right +1; //element right edge + padding
  }
  var rectTop = childRect.top;
  
  const detailContainer = document.querySelector('.detail-panel');
  
  if(e.clientY + tooltipHeight > detailContainer.offsetHeight + 60){
    // rotate around y-achsis minus the height of the element with tooltip
    rectTop -= tooltipHeight - childRect.height; 
  }
  //var mousey = e.clientY; 
  tooltip.style.transform = `translate(${rectStart}px,${rectTop}px)`;
})

document.addEventListener('mouseout', function(e){
  var tooltipEl = e.target.closest('.has-tooltip');
  if(!tooltipEl) return;
  if(currenttarget == e.target.closest('.has-tooltip')){
    tooltip.classList.remove('is-visible');
    tooltip.style.transform = 'translate(9999px,9999px)';
    currenttarget = null;
  }
})

function sizeFormat(size,pos){ //pos of size in arr
  //sizeSuffixes = ['B','KB','MB','GB'];
  if((size >= 1 && size <1000 && pos >=0 )){
    //return rounded up number and the size
    return Math.ceil(size * 100) / 100 + "" +  sizeSuffixes[pos]; //Math.ceil rounds upwards to the next whole number
  }else{
    if(size < 1 && pos != 0){
      return sizeFormat(size*1024,pos-1);
    }
    else if(size < 1 && pos == 0){
      console.error("size can't be smaller than 1 byte");
    }
    else if(size >= 1000 && pos < sizeSuffixes.length -1){
      return sizeFormat(size/1024,pos+1);
    }
    else if(size >= 1000 && pos < sizeSuffixes.length){
      return sizeFormat(size/1024,pos);
    }
    else if(size >= 1000 && pos >= sizeSuffixes.length){
      return Math.ceil(size * 100.0) / 100 + "" + sizeSuffixes[pos];
    }
  }
}
function renderCard(item){
  //create Elements for grid/list view
  const value = item.name;

  //30 Mar 2024 • 140.29KB • Playable
  const releaseDate = new Date(item.release_date);
  const lastUpdateDate = new Date(item.time_modified);
  const fileSize = item.disk_size;

  const storageNeeded = sizeFormat(fileSize,0); //returns size in the needed format

  const formattedDate = releaseDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short", //jan-dec
    year: "numeric"
  });

  const formattedlastUpdateDate = lastUpdateDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short", //jan-dec
    year: "numeric"
  });

  const cardData = {
    item : item,
    title : value,
    releaseDate : formattedDate,
    lastUpdate : formattedlastUpdateDate,
    size : storageNeeded
  };

  //render for list view
  renderList(cardData);
  renderGrid(cardData);
}


function renderGrid(cardData){
  //define elements
  const gridView = document.getElementById('view-'+activeRoute + '-grid');
  const div = document.createElement("div");
  const container = document.createElement('article'); //container of the whole card
  const img = document.createElement("img");
  const gameName = document.createElement('h3');
  const meta = document.createElement('p');
  //create content
  gameName.textContent = cardData.title;
  meta.textContent = cardData.releaseDate + " • " + cardData.size;
  
  //img attributes
  img.src = cardData.item.thumbnail_image;
  img.alt = cardData.title + " cover";

  //add classes
  container.classList.add('game-card');
  gameName.classList.add('game-title');
  img.classList.add('game-cover');
  meta.classList.add('game-meta');

  //caption for meta values
  const caption = document.createElement('div');
  caption.className = 'image-caption';

  //choose putting meta values
  const sortWindowValue = document.querySelector('.sort-select').value
  if( sortWindowValue == 'az' || sortWindowValue == 'za'){
    caption.style.display = 'none';
  }else if(sortWindowValue == 'release'){
    caption.style.display = '';
    caption.textContent = cardData.releaseDate;
  }else if(sortWindowValue == 'updated'){
    caption.style.display = '';
    caption.textContent = cardData.lastUpdate;
  }else if(sortWindowValue == 'size'){
    caption.style.display = '';
    caption.textContent = cardData.size;
  }
  div.className = "game-cover-wrap square";
  container.classList.add('game-card');
  container.dataset.id  = "json-" + cardData.item.unique_id;

  if(cardData.item.IsFavorite){
    container.classList.add('myFavorite');  
  } 
  meta.style.display = 'none';//meta is currently out of service due to its content being put in a box
  //append
  div.appendChild(img);
  div.appendChild(caption);
  container.appendChild(div);
  container.appendChild(gameName);
  container.appendChild(meta);
  gridView.appendChild(container);
}
function renderList(cardData,listView,playCardID){
  let spanClassess = ["","col-name","col-date","col-size","col-actions"];
  const spancontent = [cardData.title,cardData.lastUpdate,cardData.size];
  const search = document.querySelector('.sort-select');
  
  if(!listView){ //there could be a list view from the mods panel in detail, if not, create one
    listView = document.getElementById('view-'+activeRoute + '-list');
  }
  // if list header isn't in play and library, create one
  if(!listView.querySelector('.list-header')){ 
    const header_div = document.createElement("div");
    header_div.className = "list-header";
    let listSpancontent;
    if(listView.className == "modalCards"){
      // some empty spaces so that list header is alligned with the cards
      listSpancontent = ["","","Name","Date Modified","Disk Size",""];
      spanClassess = ["","","col-name","col-date","col-size","col-actions"];
    }else{      
      listSpancontent = ["","Name","Date Modified","Disk Size",""];
    }
    spanClassess.forEach((class_name, index) => {
      const span = document.createElement("span");
      span.className = class_name;
      if("Date Modified" == listSpancontent[index] && search.value == "release"){
        span.textContent = "Release Date"
      }else{
        span.textContent = listSpancontent[index];
      }
      header_div.appendChild(span);
    })
    listView.appendChild(header_div);
  }
  //div container
  const game_row_div = document.createElement("div");
  game_row_div.className = "game-row";
  game_row_div.dataset.id  = "json-" + cardData.item.unique_id;

  const actions = document.createElement("span");
  actions.className = spanClassess[spanClassess.length -1];

  //star button for adding favorites
  const star = document.createElement('button');
  star.className = 'fav-btn-list';
  star.textContent = '☆';

  //add a checkbox if we are in the modal window
  if(listView.className == "modalCards"){
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add('cb');
    //check if defined, cardData.item.unique_id is the mod card
    if(GAME_JSON_Mods[playCardID]){
      checkbox.checked = Object.keys(GAME_JSON_Mods[playCardID]).includes((cardData.item.unique_id).toString());
    }
    //save checkbox state in GAME_JSON_Mods 
    game_row_div.addEventListener("click", (e) => {
      if (e.target != checkbox) checkbox.checked = !checkbox.checked; //checkbox would toggle itself in html, but we can't have that!
      if(checkbox.checked){
        GAME_JSON_Mods[playCardID][cardData.item.unique_id] = (cardData.item);
      }else{
        delete GAME_JSON_Mods[playCardID][cardData.item.unique_id];
      }
    })
    game_row_div.appendChild(checkbox);
  }
  //tooltip
  const descriptionText = cardData.item.description;
  game_row_div.title = descriptionText;

  //add a list image
  const listImg = document.createElement("img");
  listImg.src = cardData.item.PreviewListImageURL;
  listImg.classList.add('preview-img');
  listImg.alt = cardData.item.name; 

  game_row_div.appendChild(listImg);

  spanClassess = ["col-name","col-date","col-size","col-actions"]; // set modified spanClasses to add for card creation
  //create cards and give every card span classes for date,size...
  spanClassess.forEach((class_name, index) => {
    if(index < spanClassess.length -1){ // everything except of last element in array
      const span = document.createElement("span");
      span.className = class_name;
      if(search.value == "release" && class_name == "col-date"){
        span.textContent = cardData.releaseDate;
      }else{
        span.textContent = spancontent[index];
      }
      game_row_div.appendChild(span);
    }
    });
  actions.appendChild(star);
  game_row_div.appendChild(actions);
  listView.appendChild(game_row_div);

  //favorite button
  const isFav = cardData.item.IsFavorite === true ? true : false;
  if(isFav){
    star.textContent = '★';
    star.classList.toggle('active');
  }

  //find all elements that are cards to change all to favorites
  const elements = document.querySelectorAll(`[data-id="${"json-"+ cardData.item.unique_id}"]`);
  star.addEventListener("click", (e)=> {
    e.stopPropagation();
    star.classList.toggle('active')
    const pressed = star.classList.contains('active');
    star.textContent = pressed ? '★' : '☆';

    elements.forEach(el => {  // give the myFavorite tag to all occurances of data-id so that all are highlighted in all views
      el.classList.toggle("myFavorite");
    });
    cardData.item.IsFavorite = !cardData.item.IsFavorite;
    const select = document.querySelector(".sort-select");
    //select.dispatchEvent(new Event("change"));  // simulate a user change to apply sorting
    favoritesChangedSinceLastView = true;
  })
}
let favoritesChangedSinceLastView = false;
let sectionPlay, cardsPlay, cardsPlayList;
let sectionLibrary, cardsLibrary, cardsLibraryList;

function initViews(){
  sectionPlay = document.querySelector('section#view-play[data-view="play"]');
  cardsPlay = sectionPlay.querySelectorAll('article.game-card');
  cardsPlayList = sectionPlay.querySelectorAll('div.game-row');

  sectionLibrary = document.querySelector('section#view-library[data-view="library"]');
  cardsLibrary = sectionLibrary.querySelectorAll('article.game-card');
  cardsLibraryList = sectionLibrary.querySelectorAll('div.game-row');
}

const search = document.querySelector(".search-input");
let searchTimeoutId = null;
search.addEventListener('input',(e) => {
  //searcher 1 time 4 play, next time 4 library
  clearTimeout(searchTimeoutId); //clears timeout for efficient slower searching
  if(e.target.value == 'Escape'){
    e.target.value = '';
  }
  const value = e.target.value;
  searchTimeoutId = setTimeout(() => {
    sectionPlay = document.querySelector('section#view-play[data-view="play"]');
    cardsPlay = sectionPlay.querySelectorAll('article.game-card');
    cardsPlayList = sectionPlay.querySelectorAll('div.game-row');

    sectionLibrary = document.querySelector('section#view-library[data-view="library"]');
    cardsLibrary = sectionLibrary.querySelectorAll('article.game-card');
    cardsLibraryList = sectionLibrary.querySelectorAll('div.game-row');

    searchDisplayer(cardsPlay,value,true); // all cards + value + grid/list
    searchDisplayer(cardsLibrary,value,true);
    searchDisplayer(cardsPlayList,value,false);
    searchDisplayer(cardsLibraryList,value,false);
  }, 200);
  
})
function searchDisplayer(cards,value,grid){
  Array.from(cards).forEach((card) => {
    let title = grid ? card.querySelector('.game-title').textContent : card.querySelector(".col-name").textContent; // set title depanding on grid/list mode
    title = String(title).toLowerCase().split(/[ _]/);
    if(title.some(part => part.startsWith(value.toLowerCase()))){
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
  })
  }

// const listButton = document.querySelector('.view-btn[data-action = "view-list"]');
// const gridButton = document.querySelector('.view-btn[data-action = "view-grid"]');
const searchWindow = document.querySelector('.search-input');
const sortWindow = document.querySelector('.custom-select__button');
sortWindow.title = "Sort games by name, date, or size";

const checker = document.querySelector("#priorityLabel");
const allActionButtons = [searchWindow,sortWindow,checker];

function hideActionButtons(arr){
  arr.forEach(element =>{
    if(element != null){
      element.style.display ='none';
    }
    
  })
};
function showActionButtons(arr){
  arr.forEach(element =>{
    if(element != null){
      element.style.display ='';
    }
  })
};

const buttons = document.querySelectorAll(
  '.view-btn[data-action="view-list"], .view-btn[data-action="view-grid"]'
);

buttons.forEach(btn => btn.addEventListener('click',clickHandler))

let playParity = 'grid-view';
let libraryParity = 'grid-view';

//handles switching with icon buttons
function clickHandler(e){
  return;
  const viewGrid = document.getElementById('view-'+activeRoute + '-grid');
  const viewList = document.getElementById('view-'+activeRoute + '-list');

  //if clicked on list-view and the grid-view is active, they will switch who is active, making list-view active
  if(e.currentTarget.dataset.action == 'view-list' && gridButton.classList.contains('active')) { //2nd class of gridButton is active or nothing
    router.push(activeRoute);
    listButton.classList.toggle('active'); //changes the css highlighting
    gridButton.classList.toggle('active');

    viewGrid.classList.toggle('active'); //changes the current view of route
    viewList.classList.toggle('active');

    if(activeRoute == 'library'){
      libraryParity = 'list-view';
    }else if(activeRoute == 'play')  {
      playParity = 'list-view';
    }
    //when you changed favorites in the list view, this will get triggered to change the sort once you click away from list view
    if (favoritesChangedSinceLastView) {
    const sortSelect = document.querySelector(".sort-select");
    sortSelect.dispatchEvent(new Event("change", { bubbles: true }));
    favoritesChangedSinceLastView = false;
    }
  }
  //if clicked on grid-view and the list-view is active, they will switch who is active, making grid-view active
  if(e.currentTarget.dataset.action == 'view-grid' && listButton.classList.contains('active')) { //2nd class of listButton is active or nothing
    router.push(activeRoute);
    listButton.classList.toggle('active');
    gridButton.classList.toggle('active');

    viewGrid.classList.toggle('active');
    viewList.classList.toggle('active');

    if(activeRoute == 'library'){
      libraryParity = 'grid-view';
    }else if(activeRoute == 'play')  {
      playParity = 'grid-view';
    }
  }
  //when you changed favorites in the list view, this will get triggered to change the sort once you click away from list view
  if (favoritesChangedSinceLastView) {
    const sortSelect = document.querySelector(".sort-select");
    sortSelect.dispatchEvent(new Event("change", { bubbles: true }));
    favoritesChangedSinceLastView = false;
    }
}

function initAll(){
  //to do: change and understand the logic
  sorter(MOD_JSON,true); // sort ascending
  //call functions
  renderAll()
  showView('start-container');
  
  initViews();
  //fake sort select that activates the brain of the real one for chromium 79 to work
  (function initCustomSortDropdown() {
  var wrap = document.getElementById('sort-custom');
  if (!wrap) return;

  var select = wrap.querySelector('select.sort-select');
  var btn = wrap.querySelector('.custom-select__button');
  var list = wrap.querySelector('.custom-select__list');

  // build options
  list.innerHTML = '';
  for (var i = 0; i < select.options.length; i++) {
    (function (opt) {
      var div = document.createElement('div');
      div.className = 'custom-select__option';
      div.setAttribute('role', 'option');
      div.dataset.value = opt.value;
      div.textContent = opt.text;
      list.appendChild(div);
    })(select.options[i]);
  }

  function close() {
    wrap.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
  function open() {
    wrap.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
  function syncButtonText() {
    var opt = select.options[select.selectedIndex];
    btn.textContent = opt ? opt.text : 'Sort';
    // update aria-selected
    var children = list.children;
    for (var i = 0; i < children.length; i++) {
      children[i].setAttribute(
        'aria-selected',
        children[i].dataset.value === select.value ? 'true' : 'false'
      );
    }
  }

  // initial text
  syncButtonText();

  // toggle open/close
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (wrap.classList.contains('open')) close();
    else open();
  });

  // choose option
  list.addEventListener('click', function (e) {
    var opt = e.target.closest('.custom-select__option');
    if (!opt) return;

    select.value = opt.dataset.value;
    syncButtonText();
    close();

    // dispatch a "real" change event (old-Chromium compatible)
    var ev = document.createEvent('Event');
    ev.initEvent('change', true, true);
    select.dispatchEvent(ev);
  });

  // close when clicking outside
  document.addEventListener('click', function () {
    close();
  });

  // keep in sync if something changes select programmatically
  select.addEventListener('change', function () {
    syncButtonText();
  });
})();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}
