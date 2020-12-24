export const ACTION = {
    FETCH_CONTENT_TYPE_WISE : "FETCH_CONTENT_TYPE_WISE",
}

export const movieList = [
    {
        'title': 'MoonLight',
        'banner': 'https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg',
        'category': '#action',
        'date': '28/10/2019',
        'time': '12:00pm'
    },
    {
        'title': 'The God Father',
        'banner': 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        'category': '#thriller',
        'date': '28/10/2019',
        'time': '12:00pm',
    },
    {
        'title': 'Avengers',
        'banner': 'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg',
        'category': '#sci-fi',
        'date': '28/10/2019',
        'time': '12:00pm',
    },
    {
        'title': 'BloodShot',
        'banner': 'https://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg',
        'category': '#action',
        'date': '28/10/2019',
        'time': '12:00pm',
    },
    {
        'title': 'Harry Potter',
        'banner': 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        'category': '#thriller',
        'date': '28/10/2019',
        'time': '12:00pm',
    },
    {
        'title': 'Now You See ME',
        'banner': 'https://upload.wikimedia.org/wikipedia/en/9/9a/Now_You_See_Me_2_poster.jpg',
        'category': '#sci-fi',
        'date': '28/10/2019',
        'time': '12:00pm',
    },
];

export const ChartData = [
    {
        live_content: '280474',
        contentTitle: 'on demand content',
        contentType: {
            "published": 60,
            "unpublished": 25,
            "kids": 15,

        },
    },
    {
        live_content: '280474',
        contentTitle: 'live tv',
        contentType: {
            "published": 40,
            "unpublished": 40,
            "kids": 20,
        }
    }
]

export const VOD = [
    {
        id: 1,
        name: 'abcd',
        totalViews: '12498',
    },
    {
        id: 2,
        name: 'adfaewrsf ji',
        totalViews: '110300',
    },
    {
        id: 3,
        name: 'afezcs',
        totalViews: '90587',
    },
    {
        id: 4,
        name: 'chichore',
        totalViews: '80876',
    }
];

export const navMenuItems = [
    {
        labelName: 'movies',
        linkName: 'movies',
    },
    {
        labelName: 'VOD',
        linkName: 'vod',
    },
    {
        labelName: 'live tv',
        linkName: 'live tv',
    },
    {
        labelName: 'editorial',
        linkName: 'live tv',
    },
    {
        labelName: 'taxonomy',
        linkName: 'vod',
    },
];

export const userInfo = [
    {
        title: 'all users',
        count: '280474'
    },
    {
        title: 'active users',
        count: '280474'
    },
    {
        title: 'premium users',
        count: '280474'
    },
];

export const mostViewedMovies = [
    {
        id: 1,
        name: 'bahubali',
        count: '12498',
    },
    {
        id: 2,
        name: 'tanah ji',
        count: '110300',
    },
    {
        id: 3,
        name: 'chappak',
        count: '90587',
    },
    {
        id: 4,
        name: 'chichore',
        count: '80876',
    },
    {
        id: 5,
        name: 'tanah ji',
        count: '110300',
    },
    {
        id: 6,
        name: 'chappak',
        count: '90587',
    },
    {
        id: 7,
        name: 'chichore',
        count: '80876',
    }
];

export const userCountColor = ['#cd69be', '#46a362', '#34a5f3'];
export const filterList = [{ id: '1', name: 'all time' },{ id: '2', name: 'half time' }, { id: '3', name: 'full time' }];

export const publishedFilterList = [{ id:'unpublished', name:'Unpublished'}];
export const contentFilterList = [{ id:"LANGUAGE", name:'Language'}];