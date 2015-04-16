/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Student = require('../api/student/student.model');
var Tile = require('../api/tile/tile.model');

User.find({}).remove(function() {
  User.create({
      "_id": "5511a83da168f8b5f3144f02",
      "name": "Rosemarie Maxwell",
      "email": "rosemariemaxwell@plexia.com",
      "role": {
        "type": "user"
      },
      "password": "culpa",
      "contextPacks": [
        "Dolch 1",
        "Dolch 2",
        "Animals",
        "Post Office",
        "Lunch",
        "Superheros",
        "School",
        "Gym Class",
        "Trains",
        "Planes"
      ],
      "groupList": [
        {"groupName": "Group A",
        "contextPacks": ["Dolch 1", "Animals", "Gym Class"]
        },
        {"groupName": "Group B",
          "contextPacks": ["Superheros"]
        },
        {"groupName": "Group C",
          "contextPacks": ["Trains", "Planes"]
        },
        {"groupName": "Group D",
          "contextPacks": ["School", "Dolch 2"]
        },
        {"groupName": "Group E",
          "contextPacks": ["Lunch"]
        }],

      "tileBucket": ["5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8ce28633ca8ad95f7f", "552c2418c7134c9a280c8048" , "552c24185768cb166a497fdb", "5511ae8c1fb25384d865e514", "5511ae8c127053ad5bf17926", "552c24180d441ed98f5c9b3b", "552c2418971878c01bab1e7c", "5511ae8c805b0d983f66e2cd", "552c2418684d651eee7cea6e", "552c24183b10b8ec888e042b", "552c2418f3a3808dd9765a0f", "552c2418291728ecd1d4667d", "5511ae8cec56277a4af216a5", "552c24180bb0fbbee3c0994b", "552c241885a79608d3f3ead5", "5511ae8cf6f121e4c3108cd6", "5511ae8cb5ac0ff225f5fde2", "5511ae8cfb1b2d41b9f92888", "552c2418e365512da04e88c6", "552c241822d53b21154c0cc0", "5511ae8c8b6533965921e512", "552c24181e58616ee17366ad",
        "552c2418c036ef35fe0bac32", "552d5c8011d58a4ad979d9b0", "552d5c80d6a8d78c5541b508", "552d5c80c0b37217fd3eded3", "552d5c80af62cb1c0a09f7bf", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61", "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc",
        "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b", "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951", "552d5b082d9c84e6c572461f", "552d5b08f186ab84dd36bd24", "552d5b08ecffac6643646176", "552d5b08461def276c7589ea", "552d5b08caede2169f0ab287", "552d5b08acda561db7b3c022",
        "552d5b0873d2087138f0b0e3", "552d5b080ddd0f4c449a6930", "552d5b08e54bac39a0fa5303", "552d5b082efcaa22520e444b", "552d5b0807228254a78d0266", "552d5b088f9b179c9f41b915", "552d5b083415e4dd5d9a985e", "552d5b08e971cb2f0c9c4a3b", "552d5b082fb9929fbcc7639e", "552d5b0835f412b5e2610557", "552d5b08cd63a5895aac2582", "552d5b08ff86b2bcff1588c2", "552d5b08e723ee4287d0e8c6", "552d5b087f7d2946369694ec", "552d5b08efa1707df67f3c69", "552d5b089f3cd6659ecec9f7", "552d5b084dd671476f5b2f19", "552d5b08d359fad21a131789", "552d5b082c63acb89b72cf89", "552d5b089c748571cac88a40", "552d5b085524dd49b0aa933f", "552d5b08cb8d71b90811efe3", "552d5b08a9dc076e610ffc7d", "552d5b084c21c73298f493bd", "552d5b0861219d0e0572b532",
        "552d5b08a55d156939bff935", "552d5b08b40c993e7068dca1", "552d5b0820c26a478b95f7bd", "552d5b0836a6578211cb2886", "552d5b08619b6ef36f95f8fd", "552d5b08e274fc1a6591c02b", "552d5b08267ab9df7ef30c11", "552d5b0875ccfa12a218aa77", "552d5b08e511287e53be311d", "552d5b08873a6b80dde989f9", "552d5b081bc5d94baaee575c", "552d5b0808eff2d9ee6452b4", "552d5b08142365901ff49f2e", "552d5b0815271edd0ad0dbd4", "552d5b08c8e6226ce98cdafd", "552d5b08d9031837ac352ecb", "552d5b081003bdec4c0446c4", "552d5b083599e39053bc5ac9", "552d5b087260cda8fa58b0ef", "552d5b08c50289e73d8a9e99", "552d5b085a5caeb37158c286", "552d5b08f198fb94de7fccd9"],
      "studentList": [
        {
          "firstName": "Cardenas",
          "lastName": "Coffey",
          "studentID": "5511ab56117e23f0412fd08f",
          "groupList": ["Group A", "Group B"],
          "contextTags": ["Gym Class", "Superheros", "Animals", "Dolch 1"]
        }, {
          "firstName": "Aisha",
          "lastName": "Wheeler",
          "studentID": "5511ab564ac02dbaf337270d",
          "groupList": ["Group A"],
          "contextTags": ["Dolch 1", "Animals", "Gym Class"]
        }, {
          "firstName": "Weiss",
          "lastName": "Tanner",
          "studentID": "5511ab5617fda1233df3f6dd",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Gym Class", "Dolch 1", "Superheros", "Animals", "Lunch"]
        },{
          "firstName": "Burke",
          "lastName": "Mayer",
          "studentID": "552c20f8be17b267b77b5a19",
          "groupList": ["Group C", "Group D", "Group E"],
          "contextTags": ["Trains", "Planes", "School", "Lunch", "Dolch 2"]
        },{
          "firstName": "Mueller",
          "lastName": "David",
          "studentID": "552c20f8d1172952c6f268fe",
          "groupList": ["Group C", "Group B", "Group E"],
          "contextTags": ["Trains", "Planes", "Superheros", "Lunch"]
        },{
          "firstName": "Kimberley",
          "lastName": "Lloyd",
          "studentID": "552c20f878838eab8bf3f0b1",
          "groupList": ["Group D"],
          "contextTags": ["School", "Dolch 2"]
        },{
          "firstName": "Rodriguez",
          "lastName": "Madden",
          "studentID": "552c20f8b21be14535092a6a",
          "groupList": ["Group B", "Group C"],
          "contextTags": ["Superheros", "Trains", "Planes"]
        },{
          "firstName": "Garza",
          "lastName": "Massey",
          "studentID": "552c20f8c91389f9a90eea7e",
          "groupList": ["Group A"],
          "contextTags": ["Dolch 1", "Animals", "Gym Class"]
        },{
          "firstName": "Deloris",
          "lastName": "Alvarado",
          "studentID": "552c20f8842d066cb9945d93",
          "groupList": ["Group D", "Group A"],
          "contextTags": ["School", "Dolch 1", "Animals", "Gym Class", "Dolch 2"]
        },{
          "firstName": "Hahn",
          "lastName": "Melendez",
          "studentID": "552c20f835f5e056a3e3c932",
          "groupList": ["Group A", "Group B", "Group E"],
          "contextTags": ["Dolch 1", "Animals", "Gym Class", "Superheros", "Lunch"]
        },{
          "firstName": "Lucinda",
          "lastName": "Bass",
          "studentID": "552c20f8f403787cef74f326",
          "groupList": ["Group A", "Group C", "Group E"],
          "contextTags": ["Dolch 1", "Animals", "Gym Class", "Trains", "Planes", "Lunch"]
        },{
          "firstName": "James",
          "lastName": "Lester",
          "studentID": "552c20f81e2f0b90bb8b354a",
          "groupList": ["Group A", "Group B"],
          "contextTags": ["Dolch 1", "Animals", "Gym Class", "Superheros"]
        },{
          "firstName": "Marva",
          "lastName": "Mcgowan",
          "studentID": "552c20f8236b5a09d40cfaf0",
          "groupList": ["Group D", "Group C", "Group E"],
          "contextTags": ["Trains", "Planes", "School", "Lunch", "Dolch 2"]
        },{
          "firstName": "Jefferson",
          "lastName": "Bean",
          "studentID": "552c20f80645c32973a23dfc",
          "groupList": ["Group A", "Group D"],
          "contextTags": ["Dolch 1", "Animals", "Gym Class", "School"]
        },{
          "firstName": "Claire",
          "lastName": "Patterson",
          "studentID": "552c20f8daa1ff88495504d5",
          "groupList": [],
          "contextTags": []
        }
      ]
    },
    /////////////////////////////////////
    {
      "_id": "5511a83d70df99c5fdfa434f",
      "name": "Le Marshall",
      "email": "lemarshall@plexia.com",
      "role": {
        "type": "user"
      },
      "password": "commodo",
      "contextPacks": [
        "Malawi",
        "Norway",
        "Sao Tome and Principe",
        "Benin",
        "Antigua and Barbuda",
        "Seychelles",
        "Dominican Republic"
      ],
      "groupList": [
        {"groupName": "Pennsylvania",
          "contextPacks": []
        },
        {"groupName": "Louisiana",
          "contextPacks": []
        },
        {"groupName": "West Virginia",
          "contextPacks": []
        },
        {"groupName": "Minnesota",
          "contextPacks": []
        },
        {"groupName": "Delaware",
          "contextPacks": []
        }],
      "tileBucket": [],
      "studentList": []
    }
  );
});

Student.find({}).remove(function() {
  Student.create(
    {
      "_id": "5511ab56117e23f0412fd08f",
      "firstName": "Cardenas",
      "lastName": "Coffey",
      "artifacts": [],
      "teachers": [
      "5511a83da168f8b5f3144f02"
    ],
      "tileBucket": ["5511ae8cec56277a4af216a5", "5511ae8cec56277a4af216a5", "5511ae8c1fb25384d865e514", "5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8c127053ad5bf17926", "5511ae8ce28633ca8ad95f7f", "5511ae8c8b6533965921e512", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61",
        "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc", "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b",
        "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951"],
      "contextTags": [
      {
        "tagName": "Gym Class",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Superheros",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Animals",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Dolch 1",
        "creatorID": "5511a83da168f8b5f3144f02"
      }
    ]
    },
    {
      "_id": "5511ab564ac02dbaf337270d",
      "firstName": "Aisha",
      "lastName": "Wheeler",
      "artifacts": [],
      "teachers": [
      "5511a83da168f8b5f3144f02"
    ],
      "tileBucket": ["5511ae8c1fb25384d865e514", "5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8c127053ad5bf17926", "5511ae8ce28633ca8ad95f7f", "5511ae8c8b6533965921e512", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61", "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc", "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b", "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951"],
      "contextTags": [
      {
        "tagName": "Dolch 1",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Animals",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Gym Class",
        "creatorID": "5511a83da168f8b5f3144f02"
      }
    ]
    },
    {
      "_id": "5511ab5617fda1233df3f6dd",
      "firstName": "Weiss",
      "lastName": "Tanner",
      "artifacts": [],
      "teachers": [
      "5511a83da168f8b5f3144f02"
    ],
      "tileBucket": ["5511ae8cec56277a4af216a5", "5511ae8c1fb25384d865e514", "5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8c127053ad5bf17926", "5511ae8ce28633ca8ad95f7f", "5511ae8c8b6533965921e512", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61", "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc", "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b", "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951"],
      "contextTags": [
      {
        "tagName": "Dolch 1",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Superheros",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Animals",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
      {
        "tagName": "Lunch",
        "creatorID": "5511a83da168f8b5f3144f02"
      },
        {"tagName": "Gym Class",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
    ]
    },
    {
      "_id": "552c20f8be17b267b77b5a19",
      "firstName": "Burke",
      "lastName": "Mayer",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["552d5c8011d58a4ad979d9b0", "552d5c80d6a8d78c5541b508", "552d5c80c0b37217fd3eded3", "552d5c80af62cb1c0a09f7bf", "5511ae8cf6f121e4c3108cd6", "5511ae8cb5ac0ff225f5fde2", "5511ae8cfb1b2d41b9f92888", "552c2418e365512da04e88c6", "552c241822d53b21154c0cc0", "552c2418f3a3808dd9765a0f", "552c2418291728ecd1d4667d", "552d5b082d9c84e6c572461f", "552d5b08f186ab84dd36bd24", "552d5b08ecffac6643646176", "552d5b08461def276c7589ea", "552d5b08caede2169f0ab287", "552d5b08acda561db7b3c022", "552d5b0873d2087138f0b0e3", "552d5b080ddd0f4c449a6930", "552d5b08e54bac39a0fa5303", "552d5b082efcaa22520e444b", "552d5b0807228254a78d0266", "552d5b088f9b179c9f41b915", "552d5b083415e4dd5d9a985e", "552d5b08e971cb2f0c9c4a3b", "552d5b082fb9929fbcc7639e", "552d5b0835f412b5e2610557", "552d5b08cd63a5895aac2582", "552d5b08ff86b2bcff1588c2", "552d5b08e723ee4287d0e8c6", "552d5b087f7d2946369694ec", "552d5b08efa1707df67f3c69", "552d5b089f3cd6659ecec9f7", "552d5b084dd671476f5b2f19", "552d5b08d359fad21a131789", "552d5b082c63acb89b72cf89", "552d5b089c748571cac88a40", "552d5b085524dd49b0aa933f", "552d5b08cb8d71b90811efe3", "552d5b08a9dc076e610ffc7d", "552d5b084c21c73298f493bd", "552d5b0861219d0e0572b532", "552d5b08a55d156939bff935", "552d5b08b40c993e7068dca1", "552d5b0820c26a478b95f7bd", "552d5b0836a6578211cb2886", "552d5b08619b6ef36f95f8fd", "552d5b08e274fc1a6591c02b", "552d5b08267ab9df7ef30c11", "552d5b0875ccfa12a218aa77", "552d5b08e511287e53be311d", "552d5b08873a6b80dde989f9", "552d5b081bc5d94baaee575c", "552d5b0808eff2d9ee6452b4", "552d5b08142365901ff49f2e", "552d5b0815271edd0ad0dbd4", "552d5b08c8e6226ce98cdafd", "552d5b08d9031837ac352ecb", "552d5b081003bdec4c0446c4", "552d5b083599e39053bc5ac9", "552d5b087260cda8fa58b0ef", "552d5b08c50289e73d8a9e99", "552d5b085a5caeb37158c286", "552d5b08f198fb94de7fccd9"],
      "contextTags": [
        {
          "tagName": "Trains",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Planes",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "School",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Lunch",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Dolch 2",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f8d1172952c6f268fe",
      "firstName": "Mueller",
      "lastName": "David",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["552d5c8011d58a4ad979d9b0", "552d5c80d6a8d78c5541b508", "552d5c80c0b37217fd3eded3", "552d5c80af62cb1c0a09f7bf", "5511ae8cec56277a4af216a5", "552c24180bb0fbbee3c0994b", "552c241885a79608d3f3ead5", "552c2418f3a3808dd9765a0f", "552c2418291728ecd1d4667d"],
      "contextTags": [
        {
          "tagName": "Trains",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Planes",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Superheros",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Lunch",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f878838eab8bf3f0b1",
      "firstName": "Kimberley",
      "lastName": "Lloyd",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["5511ae8cf6f121e4c3108cd6", "5511ae8cb5ac0ff225f5fde2", "5511ae8cfb1b2d41b9f92888", "552c2418e365512da04e88c6", "552c241822d53b21154c0cc0", "552d5b082d9c84e6c572461f", "552d5b08f186ab84dd36bd24", "552d5b08ecffac6643646176", "552d5b08461def276c7589ea", "552d5b08caede2169f0ab287", "552d5b08acda561db7b3c022", "552d5b0873d2087138f0b0e3", "552d5b080ddd0f4c449a6930", "552d5b08e54bac39a0fa5303", "552d5b082efcaa22520e444b", "552d5b0807228254a78d0266", "552d5b088f9b179c9f41b915", "552d5b083415e4dd5d9a985e", "552d5b08e971cb2f0c9c4a3b", "552d5b082fb9929fbcc7639e", "552d5b0835f412b5e2610557", "552d5b08cd63a5895aac2582", "552d5b08ff86b2bcff1588c2", "552d5b08e723ee4287d0e8c6", "552d5b087f7d2946369694ec", "552d5b08efa1707df67f3c69", "552d5b089f3cd6659ecec9f7", "552d5b084dd671476f5b2f19", "552d5b08d359fad21a131789", "552d5b082c63acb89b72cf89", "552d5b089c748571cac88a40", "552d5b085524dd49b0aa933f", "552d5b08cb8d71b90811efe3", "552d5b08a9dc076e610ffc7d", "552d5b084c21c73298f493bd", "552d5b0861219d0e0572b532", "552d5b08a55d156939bff935", "552d5b08b40c993e7068dca1", "552d5b0820c26a478b95f7bd", "552d5b0836a6578211cb2886", "552d5b08619b6ef36f95f8fd", "552d5b08e274fc1a6591c02b", "552d5b08267ab9df7ef30c11", "552d5b0875ccfa12a218aa77", "552d5b08e511287e53be311d", "552d5b08873a6b80dde989f9", "552d5b081bc5d94baaee575c", "552d5b0808eff2d9ee6452b4", "552d5b08142365901ff49f2e", "552d5b0815271edd0ad0dbd4", "552d5b08c8e6226ce98cdafd", "552d5b08d9031837ac352ecb", "552d5b081003bdec4c0446c4", "552d5b083599e39053bc5ac9", "552d5b087260cda8fa58b0ef", "552d5b08c50289e73d8a9e99", "552d5b085a5caeb37158c286", "552d5b08f198fb94de7fccd9"],
      "contextTags": [
        {
          "tagName": "School",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Dolch 2",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f8b21be14535092a6a",
      "firstName": "Rodriguez",
      "lastName": "Madden",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["5511ae8cec56277a4af216a5", "552c24180bb0fbbee3c0994b", "552c241885a79608d3f3ead5", "552d5c8011d58a4ad979d9b0", "552d5c80d6a8d78c5541b508", "552d5c80c0b37217fd3eded3", "552d5c80af62cb1c0a09f7bf"],
      "contextTags": [
        {
          "tagName": "Superheros",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Trains",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Planes",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f8c91389f9a90eea7e",
      "firstName": "Garza",
      "lastName": "Massey",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8ce28633ca8ad95f7f", "552c2418c7134c9a280c8048" ,  "552c24185768cb166a497fdb", "5511ae8c1fb25384d865e514", "5511ae8c127053ad5bf17926", "552c24180d441ed98f5c9b3b", "552c2418971878c01bab1e7c", "5511ae8c8b6533965921e512", "552c24181e58616ee17366ad",
        "552c2418c036ef35fe0bac32", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61", "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc", "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b", "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951"],
      "contextTags": [
        {
          "tagName": "Dolch 1",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Animals",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {"tagName": "Gym Class",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f8842d066cb9945d93",
      "firstName": "Deloris",
      "lastName": "Alvarado",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8ce28633ca8ad95f7f", "552c2418c7134c9a280c8048" ,  "552c24185768cb166a497fdb", "5511ae8cf6f121e4c3108cd6", "5511ae8cb5ac0ff225f5fde2", "5511ae8cfb1b2d41b9f92888", "552c2418e365512da04e88c6", "552c241822d53b21154c0cc0", "5511ae8c1fb25384d865e514", "5511ae8c127053ad5bf17926", "552c24180d441ed98f5c9b3b", "552c2418971878c01bab1e7c", "5511ae8c8b6533965921e512", "552c24181e58616ee17366ad",
        "552c2418c036ef35fe0bac32", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61", "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc", "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b", "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951", "552d5b082d9c84e6c572461f", "552d5b08f186ab84dd36bd24", "552d5b08ecffac6643646176", "552d5b08461def276c7589ea", "552d5b08caede2169f0ab287", "552d5b08acda561db7b3c022", "552d5b0873d2087138f0b0e3", "552d5b080ddd0f4c449a6930", "552d5b08e54bac39a0fa5303", "552d5b082efcaa22520e444b", "552d5b0807228254a78d0266", "552d5b088f9b179c9f41b915", "552d5b083415e4dd5d9a985e", "552d5b08e971cb2f0c9c4a3b", "552d5b082fb9929fbcc7639e", "552d5b0835f412b5e2610557", "552d5b08cd63a5895aac2582", "552d5b08ff86b2bcff1588c2", "552d5b08e723ee4287d0e8c6", "552d5b087f7d2946369694ec", "552d5b08efa1707df67f3c69", "552d5b089f3cd6659ecec9f7", "552d5b084dd671476f5b2f19", "552d5b08d359fad21a131789", "552d5b082c63acb89b72cf89", "552d5b089c748571cac88a40", "552d5b085524dd49b0aa933f", "552d5b08cb8d71b90811efe3", "552d5b08a9dc076e610ffc7d", "552d5b084c21c73298f493bd", "552d5b0861219d0e0572b532", "552d5b08a55d156939bff935", "552d5b08b40c993e7068dca1", "552d5b0820c26a478b95f7bd", "552d5b0836a6578211cb2886", "552d5b08619b6ef36f95f8fd", "552d5b08e274fc1a6591c02b", "552d5b08267ab9df7ef30c11", "552d5b0875ccfa12a218aa77", "552d5b08e511287e53be311d", "552d5b08873a6b80dde989f9", "552d5b081bc5d94baaee575c", "552d5b0808eff2d9ee6452b4", "552d5b08142365901ff49f2e", "552d5b0815271edd0ad0dbd4", "552d5b08c8e6226ce98cdafd", "552d5b08d9031837ac352ecb", "552d5b081003bdec4c0446c4", "552d5b083599e39053bc5ac9", "552d5b087260cda8fa58b0ef", "552d5b08c50289e73d8a9e99", "552d5b085a5caeb37158c286", "552d5b08f198fb94de7fccd9"],
      "contextTags": [
        {
          "tagName": "Dolch 1",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "School",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Animals",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {"tagName": "Gym Class",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Dolch 2",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f835f5e056a3e3c932",
      "firstName": "Hahn",
      "lastName": "Melendez",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8ce28633ca8ad95f7f", "552c2418c7134c9a280c8048" , "552c24185768cb166a497fdb", "5511ae8cec56277a4af216a5", "552c24180bb0fbbee3c0994b", "552c241885a79608d3f3ead5", "5511ae8c1fb25384d865e514", "5511ae8c127053ad5bf17926", "552c24180d441ed98f5c9b3b", "552c2418971878c01bab1e7c", "552c2418f3a3808dd9765a0f", "552c2418291728ecd1d4667d", "5511ae8c8b6533965921e512", "552c24181e58616ee17366ad",
        "552c2418c036ef35fe0bac32", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61", "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc", "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b", "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951"],
      "contextTags": [
        {
          "tagName": "Dolch 1",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Superheros",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Animals",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Lunch",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {"tagName": "Gym Class",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f8f403787cef74f326",
      "firstName": "Lucinda",
      "lastName": "Bass",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8ce28633ca8ad95f7f", "552c2418c7134c9a280c8048" , "552c24185768cb166a497fdb", "552d5c8011d58a4ad979d9b0", "552d5c80d6a8d78c5541b508", "552d5c80c0b37217fd3eded3", "552d5c80af62cb1c0a09f7bf", "5511ae8c1fb25384d865e514", "5511ae8c127053ad5bf17926", "552c24180d441ed98f5c9b3b", "552c2418971878c01bab1e7c", "552c2418f3a3808dd9765a0f", "552c2418291728ecd1d4667d", "5511ae8c8b6533965921e512", "552c24181e58616ee17366ad",
        "552c2418c036ef35fe0bac32", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61", "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc", "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b", "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951"],
      "contextTags": [
        {
          "tagName": "Dolch 1",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Trains",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Planes",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Animals",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Lunch",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {"tagName": "Gym Class",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f81e2f0b90bb8b354a",
      "firstName": "James",
      "lastName": "Lester",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8ce28633ca8ad95f7f", "552c2418c7134c9a280c8048" , "552c24185768cb166a497fdb", "5511ae8cec56277a4af216a5", "552c24180bb0fbbee3c0994b", "552c241885a79608d3f3ead5", "5511ae8c1fb25384d865e514", "5511ae8c127053ad5bf17926", "552c24180d441ed98f5c9b3b", "552c2418971878c01bab1e7c", "5511ae8c8b6533965921e512", "552c24181e58616ee17366ad",
        "552c2418c036ef35fe0bac32", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61", "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc", "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b", "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951"],
      "contextTags": [
        {
          "tagName": "Dolch 1",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Superheros",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Animals",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {"tagName": "Gym Class",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f8236b5a09d40cfaf0",
      "firstName": "Marva",
      "lastName": "Mcgowan",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["552d5c8011d58a4ad979d9b0", "552d5c80d6a8d78c5541b508", "5511ae8cf6f121e4c3108cd6", "5511ae8cb5ac0ff225f5fde2", "5511ae8cfb1b2d41b9f92888", "552c2418e365512da04e88c6", "552c241822d53b21154c0cc0", "552d5c80c0b37217fd3eded3", "552d5c80af62cb1c0a09f7bf", "552c2418f3a3808dd9765a0f", "552c2418291728ecd1d4667d", "552d5b082d9c84e6c572461f", "552d5b08f186ab84dd36bd24", "552d5b08ecffac6643646176", "552d5b08461def276c7589ea", "552d5b08caede2169f0ab287", "552d5b08acda561db7b3c022", "552d5b0873d2087138f0b0e3", "552d5b080ddd0f4c449a6930", "552d5b08e54bac39a0fa5303", "552d5b082efcaa22520e444b", "552d5b0807228254a78d0266", "552d5b088f9b179c9f41b915", "552d5b083415e4dd5d9a985e", "552d5b08e971cb2f0c9c4a3b", "552d5b082fb9929fbcc7639e", "552d5b0835f412b5e2610557", "552d5b08cd63a5895aac2582", "552d5b08ff86b2bcff1588c2", "552d5b08e723ee4287d0e8c6", "552d5b087f7d2946369694ec", "552d5b08efa1707df67f3c69", "552d5b089f3cd6659ecec9f7", "552d5b084dd671476f5b2f19", "552d5b08d359fad21a131789", "552d5b082c63acb89b72cf89", "552d5b089c748571cac88a40", "552d5b085524dd49b0aa933f", "552d5b08cb8d71b90811efe3", "552d5b08a9dc076e610ffc7d", "552d5b084c21c73298f493bd", "552d5b0861219d0e0572b532", "552d5b08a55d156939bff935", "552d5b08b40c993e7068dca1", "552d5b0820c26a478b95f7bd", "552d5b0836a6578211cb2886", "552d5b08619b6ef36f95f8fd", "552d5b08e274fc1a6591c02b", "552d5b08267ab9df7ef30c11", "552d5b0875ccfa12a218aa77", "552d5b08e511287e53be311d", "552d5b08873a6b80dde989f9", "552d5b081bc5d94baaee575c", "552d5b0808eff2d9ee6452b4", "552d5b08142365901ff49f2e", "552d5b0815271edd0ad0dbd4", "552d5b08c8e6226ce98cdafd", "552d5b08d9031837ac352ecb", "552d5b081003bdec4c0446c4", "552d5b083599e39053bc5ac9", "552d5b087260cda8fa58b0ef", "552d5b08c50289e73d8a9e99", "552d5b085a5caeb37158c286", "552d5b08f198fb94de7fccd9"],
      "contextTags": [
        {
          "tagName": "Trains",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "School",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Planes",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Lunch",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Dolch 2",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f80645c32973a23dfc",
      "firstName": "Jefferson",
      "lastName": "Bean",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": ["5511ae8c72c6bb3a7f9cd910", "5511ae8c081ccbd0d072d7b4", "5511ae8ce28633ca8ad95f7f", "552c2418c7134c9a280c8048" , "552c24185768cb166a497fdb", "5511ae8cf6f121e4c3108cd6", "5511ae8cb5ac0ff225f5fde2", "5511ae8cfb1b2d41b9f92888", "552c2418e365512da04e88c6", "552c241822d53b21154c0cc0", "5511ae8c1fb25384d865e514", "5511ae8c127053ad5bf17926", "552c24180d441ed98f5c9b3b", "552c2418971878c01bab1e7c", "5511ae8c8b6533965921e512", "552c24181e58616ee17366ad",
        "552c2418c036ef35fe0bac32", "552d5b08e1a3de8740774fad", "552d5b0887232647659a6296", "552d5b086d8bd05eb7a71766", "552d5b08b1e363557b2d662c", "552d5b08a2385a889f90f803", "552d5b086a2b54d6b160c51d", "552d5b0824d1092b1ed1c157", "552d5b08f631321946da8341", "552d5b08adc822e8831e298b", "552d5b08acded8a6cd6e8dcd", "552d5b08791292bc5e665b61", "552d5b0840b221baaad921ec", "552d5b08cb39389025769c04", "552d5b0815a9a1d0c6d88e3f", "552d5b086f1b0ace75ad66b6", "552d5b0887c944a743ba6031", "552d5b088b5e733aba8d2620", "552d5b0880b6c91fd8b9cbdb", "552d5b08bc8421b20abb5a62", "552d5b089bd03191b7ec9afc", "552d5b08bd3cd8f963e1167c", "552d5b08a734bbb099a68155", "552d5b087608732157874619", "552d5b088f784a3f8ef312ef", "552d5b08a08d5bda499e42cf", "552d5b08ac6a61a811b9c664", "552d5b08597bf5df8d343bfb", "552d5b0847299c2a7c0811ae", "552d5b089948ede80f3adc37", "552d5b08bd843d9c13526d76", "552d5b082a0145f4a6ab126b", "552d5b0836a47a9760ce84bc", "552d5b08974d0d4e9a148336", "552d5b08960c4c9f31af08f9", "552d5b082ac06aace229fc18", "552d5b080a41ac71696ae275", "552d5b08ebef1861e6925df1", "552d5b086fdeebe962ffc171", "552d5b0881b0e2b117537951", "552d5b082d9c84e6c572461f", "552d5b08f186ab84dd36bd24", "552d5b08ecffac6643646176", "552d5b08461def276c7589ea", "552d5b08caede2169f0ab287", "552d5b08acda561db7b3c022", "552d5b0873d2087138f0b0e3", "552d5b080ddd0f4c449a6930", "552d5b08e54bac39a0fa5303", "552d5b082efcaa22520e444b", "552d5b0807228254a78d0266", "552d5b088f9b179c9f41b915", "552d5b083415e4dd5d9a985e", "552d5b08e971cb2f0c9c4a3b", "552d5b082fb9929fbcc7639e", "552d5b0835f412b5e2610557", "552d5b08cd63a5895aac2582", "552d5b08ff86b2bcff1588c2", "552d5b08e723ee4287d0e8c6", "552d5b087f7d2946369694ec", "552d5b08efa1707df67f3c69", "552d5b089f3cd6659ecec9f7", "552d5b084dd671476f5b2f19", "552d5b08d359fad21a131789", "552d5b082c63acb89b72cf89", "552d5b089c748571cac88a40", "552d5b085524dd49b0aa933f", "552d5b08cb8d71b90811efe3", "552d5b08a9dc076e610ffc7d", "552d5b084c21c73298f493bd", "552d5b0861219d0e0572b532", "552d5b08a55d156939bff935", "552d5b08b40c993e7068dca1", "552d5b0820c26a478b95f7bd", "552d5b0836a6578211cb2886", "552d5b08619b6ef36f95f8fd", "552d5b08e274fc1a6591c02b", "552d5b08267ab9df7ef30c11", "552d5b0875ccfa12a218aa77", "552d5b08e511287e53be311d", "552d5b08873a6b80dde989f9", "552d5b081bc5d94baaee575c", "552d5b0808eff2d9ee6452b4", "552d5b08142365901ff49f2e", "552d5b0815271edd0ad0dbd4", "552d5b08c8e6226ce98cdafd", "552d5b08d9031837ac352ecb", "552d5b081003bdec4c0446c4", "552d5b083599e39053bc5ac9", "552d5b087260cda8fa58b0ef", "552d5b08c50289e73d8a9e99", "552d5b085a5caeb37158c286", "552d5b08f198fb94de7fccd9"],
      "contextTags": [
        {
          "tagName": "Dolch 1",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "School",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {
          "tagName": "Animals",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {"tagName": "Gym Class",
          "creatorID": "5511a83da168f8b5f3144f02"
        },
        {"tagName": "Dolch 2",
          "creatorID": "5511a83da168f8b5f3144f02"
        }
      ]
    },
    {
      "_id": "552c20f8daa1ff88495504d5",
      "firstName": "Claire",
      "lastName": "Patterson",
      "teachers": [
        "5511a83da168f8b5f3144f02"
      ],
      "tileBucket": [],
      "contextTags": []
    }
  )
});



Tile.find({}).remove(function() {
  Tile.create({

    "_id": "5511ae8c805b0d983f66e2cd",
    "name": "Mail",
      "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Post Office"
    }
  ],
    "active": false,
      "wordType": "Noun"
  },
  {
    "_id": "5511ae8cec56277a4af216a5",
    "name": "Batman",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
      {
      "tagName": "Superheros"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8c1fb25384d865e514",
    "name": "Dog",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Animals"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8cf6f121e4c3108cd6",
    "name": "Book",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "School"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8cb5ac0ff225f5fde2",
    "name": "Pencil",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "School"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8c72c6bb3a7f9cd910",
    "name": "Jump",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Dolch 1"
    }
  ],
    "active": false,
    "wordType": "Verb"
  },
  {
    "_id": "5511ae8c081ccbd0d072d7b4",
    "name": "Run",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Dolch 1"
    }
  ],
    "active": false,
    "wordType": "Verb"
  },
  {
    "_id": "5511ae8cfb1b2d41b9f92888",
    "name": "Desk",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "School"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8c127053ad5bf17926",
    "name": "Cat",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Animals"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8ce28633ca8ad95f7f",
    "name": "House",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Dolch 1"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "5511ae8c8b6533965921e512",
    "name": "Ball",
    "creatorID": "5511a83da168f8b5f3144f02",
    "contextTags": [
    {
      "tagName": "Gym Class"
    }
  ],
    "active": false,
    "wordType": "Noun"

  },
    {
      "_id": "552c2418c7134c9a280c8048",
      "name": "a",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Article"
    },
    {
      "_id": "552c24180d441ed98f5c9b3b",
      "name": "bear",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Animals"
        }
      ],
      "active": false,
      "wordType": "Noun"
    },
    {
      "_id": "552c2418684d651eee7cea6e",
      "name": "stamp",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Post Office"
        }
      ],
      "active": false,
      "wordType": "Noun"
    },
    {
      "_id": "552c2418f3a3808dd9765a0f",
      "name": "eat",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Lunch"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552c24180bb0fbbee3c0994b",
      "name": "Iron Man",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Superheros"
        }
      ],
      "active": false,
      "wordType": "Noun"
    },
    {
      "_id": "552c2418e365512da04e88c6",
      "name": "teacher",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "School"
        }
      ],
      "active": false,
      "wordType": "Noun"
    },
    {
      "_id": "552c24181e58616ee17366ad",
      "name": "catch",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Gym Class"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552c24185768cb166a497fdb",
      "name": "and",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Conjunction"
    },
    {
      "_id": "552c2418971878c01bab1e7c",
      "name": "giraffe",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Animals"
        }
      ],
      "active": false,
      "wordType": "noun"
    },
    {
      "_id": "552c24183b10b8ec888e042b",
      "name": "send",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Post Office"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552c2418291728ecd1d4667d",
      "name": "apple",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Lunch"
        }
      ],
      "active": false,
      "wordType": "Noun"
    },
    {
      "_id": "552c241885a79608d3f3ead5",
      "name": "Captain America",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Superheros"
        }
      ],
      "active": false,
      "wordType": "Noun"
    },
    {
      "_id": "552c241822d53b21154c0cc0",
      "name": "bus",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "School"
        }
      ],
      "active": false,
      "wordType": "Noun"
    },
    {
      "_id": "552c2418c036ef35fe0bac32",
      "name": "fast",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Gym Class"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },


    {
    "_id": "552d5c8011d58a4ad979d9b0",
      "name": "Conductor",
      "contextTags": [
      {
        "tagName": "Trains",
        "creatorID": "5511a83da168f8b5f3144f02"
      }
    ],
      "active": false,
      "wordType": "Noun"
  },
  {
    "_id": "552d5c80d6a8d78c5541b508",
    "name": "Steam",
    "contextTags": [
    {
      "tagName": "Trains",
      "creatorID": "5511a83da168f8b5f3144f02"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "552d5c80c0b37217fd3eded3",
    "name": "Pilot",
    "contextTags": [
    {
      "tagName": "Planes",
      "creatorID": "5511a83da168f8b5f3144f02"
    }
  ],
    "active": false,
    "wordType": "Noun"
  },
  {
    "_id": "552d5c80af62cb1c0a09f7bf",
    "name": "Fly",
    "contextTags": [
    {
      "tagName": "Planes",
      "creatorID": "5511a83da168f8b5f3144f02"
    }
  ],
    "active": false,
    "wordType": "Verb"
  },
    {
      "_id": "552d5b08e1a3de8740774fad",
      "name": "away",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b0887232647659a6296",
      "name": "big",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b086d8bd05eb7a71766",
      "name": "blue",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b08b1e363557b2d662c",
      "name": "can",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08a2385a889f90f803",
      "name": "come",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b086a2b54d6b160c51d",
      "name": "down",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b0824d1092b1ed1c157",
      "name": "find",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08f631321946da8341",
      "name": "for",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Preposition"
    },
    {
      "_id": "552d5b08adc822e8831e298b",
      "name": "funny",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b08acded8a6cd6e8dcd",
      "name": "go",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08791292bc5e665b61",
      "name": "help",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b0840b221baaad921ec",
      "name": "here",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b08cb39389025769c04",
      "name": "I",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b0815a9a1d0c6d88e3f",
      "name": "in",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Preposition"
    },
    {
      "_id": "552d5b086f1b0ace75ad66b6",
      "name": "is",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b0887c944a743ba6031",
      "name": "it",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b088b5e733aba8d2620",
      "name": "jump",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b0880b6c91fd8b9cbdb",
      "name": "little",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08bc8421b20abb5a62",
      "name": "little",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b089bd03191b7ec9afc",
      "name": "look",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08bd3cd8f963e1167c",
      "name": "make",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08a734bbb099a68155",
      "name": "me",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b087608732157874619",
      "name": "my",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b088f784a3f8ef312ef",
      "name": "not",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b08a08d5bda499e42cf",
      "name": "one",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b08ac6a61a811b9c664",
      "name": "play",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08597bf5df8d343bfb",
      "name": "red",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b0847299c2a7c0811ae",
      "name": "run",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b089948ede80f3adc37",
      "name": "said",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08bd843d9c13526d76",
      "name": "see",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b082a0145f4a6ab126b",
      "name": "the",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Article"
    },
    {
      "_id": "552d5b0836a47a9760ce84bc",
      "name": "three",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b08974d0d4e9a148336",
      "name": "to",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Preposition"
    },
    {
      "_id": "552d5b08960c4c9f31af08f9",
      "name": "two",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b082ac06aace229fc18",
      "name": "up",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b080a41ac71696ae275",
      "name": "we",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b08ebef1861e6925df1",
      "name": "where",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b086fdeebe962ffc171",
      "name": "yellow",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b0881b0e2b117537951",
      "name": "you",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 1"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b082d9c84e6c572461f",
      "name": "all",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b08f186ab84dd36bd24",
      "name": "am",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08ecffac6643646176",
      "name": "are",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08461def276c7589ea",
      "name": "at",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Preposition"
    },
    {
      "_id": "552d5b08caede2169f0ab287",
      "name": "ate",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08acda561db7b3c022",
      "name": "be",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b0873d2087138f0b0e3",
      "name": "black",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b080ddd0f4c449a6930",
      "name": "brown",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b08e54bac39a0fa5303",
      "name": "but",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Preposition"
    },
    {
      "_id": "552d5b082efcaa22520e444b",
      "name": "came",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b0807228254a78d0266",
      "name": "did",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b088f9b179c9f41b915",
      "name": "do",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b083415e4dd5d9a985e",
      "name": "eat",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08e971cb2f0c9c4a3b",
      "name": "four",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b082fb9929fbcc7639e",
      "name": "get",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b0835f412b5e2610557",
      "name": "good",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b08cd63a5895aac2582",
      "name": "have",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08ff86b2bcff1588c2",
      "name": "he",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b08e723ee4287d0e8c6",
      "name": "into",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Preposition"
    },
    {
      "_id": "552d5b087f7d2946369694ec",
      "name": "like",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08efa1707df67f3c69",
      "name": "must",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b089f3cd6659ecec9f7",
      "name": "new",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b084dd671476f5b2f19",
      "name": "no",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b08d359fad21a131789",
      "name": "now",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b082c63acb89b72cf89",
      "name": "on",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Preposition"
    },
    {
      "_id": "552d5b089c748571cac88a40",
      "name": "our",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b085524dd49b0aa933f",
      "name": "out",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b08cb8d71b90811efe3",
      "name": "please",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08a9dc076e610ffc7d",
      "name": "pretty",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b084c21c73298f493bd",
      "name": "ran",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b0861219d0e0572b532",
      "name": "ride",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08a55d156939bff935",
      "name": "saw",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08b40c993e7068dca1",
      "name": "say",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b0820c26a478b95f7bd",
      "name": "she",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b0836a6578211cb2886",
      "name": "so",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b08619b6ef36f95f8fd",
      "name": "soon",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b08e274fc1a6591c02b",
      "name": "that",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b08267ab9df7ef30c11",
      "name": "there",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b0875ccfa12a218aa77",
      "name": "they",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b08e511287e53be311d",
      "name": "this",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b08873a6b80dde989f9",
      "name": "too",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b081bc5d94baaee575c",
      "name": "under",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    },
    {
      "_id": "552d5b0808eff2d9ee6452b4",
      "name": "want",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08142365901ff49f2e",
      "name": "was",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b0815271edd0ad0dbd4",
      "name": "was",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b08c8e6226ce98cdafd",
      "name": "well",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b08d9031837ac352ecb",
      "name": "went",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b081003bdec4c0446c4",
      "name": "what",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b083599e39053bc5ac9",
      "name": "white",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adjective"
    },
    {
      "_id": "552d5b087260cda8fa58b0ef",
      "name": "who",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Pronoun"
    },
    {
      "_id": "552d5b08c50289e73d8a9e99",
      "name": "will",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Verb"
    },
    {
      "_id": "552d5b085a5caeb37158c286",
      "name": "with",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Preposition"
    },
    {
      "_id": "552d5b08f198fb94de7fccd9",
      "name": "yes",
      "creatorID": "5511a83da168f8b5f3144f02",
      "contextTags": [
        {
          "tagName": "Dolch 2"
        }
      ],
      "active": false,
      "wordType": "Adverb"
    })
});





