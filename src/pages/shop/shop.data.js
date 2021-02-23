const SHOP_DATA = [
    {
      id: 1,
      title: 'Puch',
      routeName: 'puch',
      items: [
        {
          id: 1,
          name: 'White 1986 Puch Maxi',
          imageUrl: 'https://i2.wp.com/www.detroitmopedworks.com/wp-content/uploads/2020/08/1986-White-Puch-Maxi-1.jpg?fit=1600%2C898&ssl=1',
          price: 1500
        },
        {
          id: 2,
          name: 'Blue 1978 Puch Maxi',
          imageUrl: 'https://i0.wp.com/www.detroitmopedworks.com/wp-content/uploads/2016/06/Blue-Puch-Maxi.png?fit=1240%2C696&ssl=1',
          price: 1200
        },
        {
          id: 3,
          name: 'Shop Burner Puch Maxi E50',
          imageUrl: 'https://i2.wp.com/www.detroitmopedworks.com/wp-content/uploads/2018/02/Custom-black-Puch-Maxi-ZA50-with-long-seat-from-Detroit-Moped-Works-2.jpg?fit=1600%2C898&ssl=1',
          price: 700
        },
        {
          id: 4,
          name: '1976 White and Purple Puch Maxi',
          imageUrl: 'https://i0.wp.com/www.detroitmopedworks.com/wp-content/uploads/2018/04/White-and-Purple-Puch-Maxi-Detroit-Moped-Works-two-stroke-02.jpg?fit=1240%2C696&ssl=1',
          price: 1350
        },
        {
          id: 5,
          name: '1980 Puch Magnum XK',
          imageUrl: 'https://i0.wp.com/www.detroitmopedworks.com/wp-content/uploads/2016/06/magnum-xk.png?fit=1240%2C696&ssl=1',
          price: 2200
        },
        {
            id: 6,
            name: '1986 Puch Maxi Sport LS2',
            imageUrl: 'https://i2.wp.com/www.detroitmopedworks.com/wp-content/uploads/2020/08/1986-Black-and-Gold-Puch-Maxi-Sport-LS2-1.jpg?fit=1600%2C898&ssl=1',
            price: 1500
        }
      ]
    },
    {
      id: 2,
      title: 'Honda',
      routeName: 'honda',
      items: [
        {
          id: 1,
          name: '1969 Honda CM91 Super Cub',
          imageUrl: 'https://i0.wp.com/www.detroitmopedworks.com/wp-content/uploads/2020/08/1969-Honda-CM91-three-speed-motorcycle-1.jpg?fit=1600%2C898&ssl=1',
          price: 1200
        },
        {
          id: 2,
          name: '1979 Honda Express',
          imageUrl: 'https://i2.wp.com/www.detroitmopedworks.com/wp-content/uploads/2016/05/Main-2.png?fit=1240%2C696&ssl=1',
          price: 1500
        },
        {
          id: 3,
          name: 'Honda Hobbit Hybrid',
          imageUrl: 'https://i0.wp.com/www.detroitmopedworks.com/wp-content/uploads/2015/10/Nu50Hobbit-Cropped.jpg?fit=640%2C360&ssl=1',
          price: 900
        },
        {
          id: 4,
          name: 'Honda Hobbit Obsession',
          imageUrl: 'https://i2.wp.com/www.detroitmopedworks.com/wp-content/uploads/2015/03/Obsession-2.jpg?fit=960%2C722&ssl=1',
          price: 1000
        },
        {
            id: 5,
            name: 'Custom PA50 / 102 SP',
            imageUrl: 'https://i2.wp.com/www.detroitmopedworks.com/wp-content/uploads/2018/05/Custom-PA50-102-SP-01.jpg?fit=1600%2C898&ssl=1',
            price: 2000
        },
        {
            id: 6,
            name: '1981 Red Honda Express II',
            imageUrl: 'https://i0.wp.com/www.detroitmopedworks.com/wp-content/uploads/2016/08/1981-Red-Honda-Express-II.png?fit=1240%2C696&ssl=1',
            price: 850
        },
        {
            id: 7,
            name: 'GOLD Honda Urban Express Deluxe',
            imageUrl: 'https://i0.wp.com/www.detroitmopedworks.com/wp-content/uploads/2020/08/FASTEST-GOLD-Honda-Urban-Express-Deluxe-1.jpg?fit=1600%2C898&ssl=1',
            price: 2000
        }
      ]
    },
    {
      id: 3,
      title: 'Peugoet',
      routeName: 'peugoet',
      items: [
        {
          id: 1,
          name: '1964 Peugeot CT',
          imageUrl: 'https://i2.wp.com/www.detroitmopedworks.com/wp-content/uploads/2017/01/Peugeot-IMG_7714.jpg?fit=1600%2C1600&ssl=1',
          price: 1537
        },
        {
          id: 2,
          name: 'Peugeot 103 SS Custom',
          imageUrl: 'https://i2.wp.com/www.detroitmopedworks.com/wp-content/uploads/2015/04/Peugeot-Detroit-Moped-Works-1-e1486502528578.png?fit=1240%2C696&ssl=1',
          price: 90
        }
      ]
    },
    {
      id: 4,
      title: 'Parts',
      routeName: 'parts',
      items: [
        {
          id: 1,
          name: 'Puch 70cc 45mm Treat KIT',
          imageUrl: 'https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/Puch-treat-kit-70cc-the-people-2T.jpg',
          price: 80
        },
        {
          id: 2,
          name: 'Honda Hobbit PA50 Moped DR 46mm 70cc Cylinder Kit',
          imageUrl: 'https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/HONDA-HOBBIT-DR-70CC-KIT-2T.jpg',
          price: 125
        },
        {
          id: 3,
          name: 'Mikuni VM 18mm Clamp Style Carburetor',
          imageUrl: 'https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/mikuni-18mm-vm-round-slide-2T.jpg',
          price: 65
        },
        {
          id: 4,
          name: 'Bing 15mm CLONE Carburetor',
          imageUrl: 'https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/bing-15-clone-carburetor-puch-3T.jpg',
          price: 50
        },
        {
          id: 5,
          name: 'Honda Hobbit Proma Performance Pipe PA50 CAMINO PA50II',
          imageUrl: 'https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/honda-proma-pipe-hobbit-PA50-2T.jpg',
          price: 90
        },
        {
          id: 6,
          name: 'Puch Homoet 6p Performance Pipe',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 210
        },
        {
          id: 7,
          name: 'Puch e50 Tool Kit',
          imageUrl: 'https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/puch-e50-tool-party-2T.jpg',
          price: 25
        }
      ]
    },
    {
      id: 5,
      title: 'Apparel',
      routeName: 'apparel',
      items: [
        {
          id: 1,
          name: 'Broken Mopeds T-shirt',
          imageUrl: 'https://i1.wp.com/www.detroitmopedworks.com/wp-content/uploads/2021/02/85ce3fd64e1f4979e04bc0c40b2edcf6196b2711.jpg?fit=1500%2C1500&ssl=1',
          price: 20
        },
        {
          id: 2,
          name: 'Puch Maxi Enamel Pins',
          imageUrl: 'https://i2.wp.com/www.detroitmopedworks.com/wp-content/uploads/2021/01/ItsJustMopedsSchemaCollectivePuchMaxi.jpg?fit=500%2C500&ssl=1',
          price: 10
        },
        {
          id: 3,
          name: 'MOPED shirt by INKNIFE',
          imageUrl: 'https://i0.wp.com/www.detroitmopedworks.com/wp-content/uploads/2021/01/9248fe6a8d75eccb197b02fd91094cf03de19245-7.jpg?w=828&ssl=1',
          price: 25
        },
        {
          id: 4,
          name: 'Official Rally Windbreaker',
          imageUrl: 'https://cdn3.volusion.com/vod3d.s9orw/v/vspfiles/photos/rally-windbreaker-turquoise-2T.jpg?v-cache=1593187036',
          price: 35
        }
      ]
    }
]

export default SHOP_DATA;  