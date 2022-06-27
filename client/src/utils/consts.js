//export const ADMIN_ROUTE = '/admin'
export const LOGIN_ROUTE = '/login'
export const REGISTRATION_ROUTE = '/registration'
export const RESETPASS_ROUTE = '/reset-pass'
export const NEWPASS_ROUTE = '/new-pass'
export const ELEPHANT_ROUTE = '/elephants'
export const CROPPER_ROUTE = '/croppers'
export const OASES_ROUTE = '/oases'
export const USER_ROUTE = '/me'
export const BOT_ROUTE = '/bot'
export const SERVERS_ROUTE = '/servers'
export const ADDACC_ROUTE = '/add-account'

export const HOME_ROUTE = '/'
export const FAQ_ROUTE = '/faq'

export const Units = {
    'roman': {
        'barracks': [
            {'type':1,'id':1,'name':'Legionnaire','bld':'barracks','def':1},
            {'type':2,'id':2,'name':'Praetorian', 'bld':'barracks'},
            {'type':3,'id':3,'name':'Imperian', 'bld':'barracks'},
        ],
        'stable':[
            {'type':4,'id':4,'name':'Equites Legati', 'bld':'stable'},
            {'type':5,'id':5,'name':'Equites Imperatoris', 'bld':'stable'},
            {'type':6,'id':6,'name':'Equites Caesaris', 'bld':'stable'},
        ],
        'workshop':[
            {'type':7,'id':7,'name':'Battering ram', 'bld':'workshop'},
            {'type':8,'id':8,'name':'Fire Catapult', 'bld':'workshop'},
        ],
        'residense':[
            {'type':9,'id':9,'name':'Senator', 'bld':'residense'},
            {'type':10,'id':10,'name':'Settler', 'bld':'residense'},
        ]
    },
    'teuton': {
        'barracks': [
            {'type':1,'id':11,'name':'Clubswinger', 'bld':'barracks'},
            {'type':2,'id':12,'name':'Spearman', 'bld':'barracks', 'def':1},
            {'type':3,'id':13,'name':'Axeman', 'bld':'barracks'},
            {'type':4,'id':14,'name':'Scout', 'bld':'barracks'},
        ],
        'stable':[
            {'type':5,'id':15,'name':'Paladin', 'bld':'stable'},
            {'type':6,'id':16,'name':'Teutonic Knight', 'bld':'stable'},
        ],
        'workshop':[
            {'type':7,'id':17,'name':'Ram', 'bld':'workshop'},
            {'type':8,'id':18,'name':'Catapult', 'bld':'workshop'},
        ],
        'residense':[
            {'type':9,'id':19,'name':'Chief', 'bld':'residense'},
            {'type':10,'id':20,'name':'Settler', 'bld':'residense'},
        ]
    },
    'gaul': {
        'barracks': [
            {'type':1,'id':21,'name':'Phalanx', 'bld':'barracks'},
            {'type':2,'id':22,'name':'Swordsman', 'bld':'barracks'}
        ],
        'stable':[
             {'type':3,'id':23,'name':'Pathfinder', 'bld':'stable'},
             {'type':4,'id':24,'name':'Theutates Thunder', 'bld':'stable'},
             {'type':5,'id':25,'name':'Druidrider', 'bld':'stable'},
             {'type':6,'id':26,'name':'Haeduan', 'bld':'stable'},
        ],
        'workshop':[
            {'type':7,'id':27,'name':'Ram', 'bld':'workshop'},
            {'type':8,'id':28,'name':'Trebuchet', 'bld':'workshop'},
        ],
        'residense':[
             {'type':9,'id':29,'name':'Chieftain', 'bld':'residense'},
             {'type':10,'id':30,'name':'Settler', 'bld':'residense'},
        ]
    },
    'egyptian': {
        'barracks': [
            {'type':1,'id':51,'name':'Slave Militia', 'bld':'barracks'},
            {'type':2,'id':52,'name':'Ash Warden', 'bld':'barracks'},
            {'type':3,'id':53,'name':'Khopesh Warrior', 'bld':'barracks'},
        ],
        'stable':[
            {'type':4,'id':54,'name':'Sopdu Explorer', 'bld':'stable'},
            {'type':5,'id':55,'name':'Anhur Guard', 'bld':'stable'},
            {'type':6,'id':56,'name':'Resheph Chariot', 'bld':'stable'},
        ],
        'workshop':[
            {'type':7,'id':57,'name':'Ram', 'bld':'workshop'},
            {'type':8,'id':58,'name':'Stone Catapult', 'bld':'workshop'},
        ],
        'residense':[
            {'type':9,'id':59,'name':'Nomarch', 'bld':'residense'},
            {'type':10,'id':60,'name':'Settler', 'bld':'residense'},
        ]
    },
    'hun': {
        'barracks': [
            {'type':1,'id':61,'name':'Mercenary', 'bld':'barracks'},
            {'type':2,'id':62,'name':'Bowman', 'bld':'barracks'},
            {'type':3,'id':63,'name':'Spotter', 'bld':'barracks'},
        ],
        'stable':[
            {'type':4,'id':64,'name':'Steppe Rider', 'bld':'stable'},
            {'type':5,'id':65,'name':'Marksman', 'bld':'stable'},
            {'type':6,'id':66,'name':'Marauder', 'bld':'stable'},
        ],
        'workshop':[
            {'type':7,'id':67,'name':'Ram', 'bld':'workshop'},
            {'type':8,'id':68,'name':'Catapult', 'bld':'workshop'},
        ],
        'residense':[
            {'type':9,'id':69,'name':'Logades', 'bld':'residense'},
            {'type':10,'id':70,'name':'Settler', 'bld':'residense'},
        ]
    },
}
export const Buildings = {
    '10': [1, 'Warehouse'],
    '11': [1, 'Granary'],
    '15': [1, 'Main Building'],
    '17': [1, 'Marketplace'],
    '18': [1, 'Embassy'],
    '23': [1, 'Cranny',10],
    '24': [1, 'Town Hall'],
    '25': [1, 'Residence'],
    '26': [1, 'Palace'],
    '27': [1, 'Treasury'],
    '28': [1, 'Trade Office'],
    '34': [1, 'Stonemason\'s Lodge'],
    '35': [1, 'Brewery'],
    '38': [1, 'Great Warehouse'],
    '39': [1, 'Great Granary'],
    '40': [1, 'Wonder Of The World',100],
    '41': [1, 'Horse Drinking Trough'],
    '44': [1, 'Command Center'],
    '45': [1, 'Waterworks'],
    '13': [2, 'Smithy'],
    '14': [2, 'Tournament Square'],
    '16': [2, 'Rally Point'],
    '19': [2, 'Barracks'],
    '20': [2, 'Stable'],
    '21': [2, 'Workshop'],
    '22': [2, 'Academy'],
    '29': [2, 'Great Barracks'],
    '30': [2, 'Great Stable'],
    '31': [2, 'City Wall'],
    '32': [2, 'Earth Wall'],
    '33': [2, 'Palisade'],
    '36': [2, 'Trapper'],
    '37': [2, 'Hero\'s Mansion'],
    '42': [2, 'Stone Wall'],
    '43': [2, 'Makeshift Wall'],
    '46': [2, 'Hospital'],
    '1': [3, 'Woodcutter'],
    '2': [3, 'Clay Pit'],
    '3': [3, 'Iron Mine'],
    '4': [3, 'Cropland'],
    '5': [3, 'Sawmill',5],
    '6': [3, 'Brickyard',5],
    '7': [3, 'Iron Foundry',5],
    '8': [3, 'Grain Mill',5],
    '9': [3, 'Bakery',5],
}



