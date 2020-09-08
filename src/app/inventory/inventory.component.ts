import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  @HostListener('scroll', ['$event']) 
    scrollHandler(event) {
      console.debug("Scroll Event");
    }

    foodData = []
   
  foodItemData= {};
  pages = 0;
  pagesCount = [];
  keys:any;
  first = 0;
  last=4;
  nextbtnshow = true;
  prevbtnshow=false;
  tab:String;
   key = [];
   menukeys = [];
   tempone = true;
   selectedItem:any;
   testiomonalBanner = []
  constructor() { 

    this.loadScript('/assets/lib/blockmin.js');
    this.testiomonalBanner = [{ 
      name: 'Siddarth Khosla',
      description: 'He is a graduate student pursuing management information systems from university of Illinois Chicago',
      title : 'skhosl4@uic.edu',
      images: [
        {
          imageUrl : 'khosla.jpeg',
          imageName : 'graduate student'
        }
      ]

 }, { 
  name: 'Siddarth Khosla',
  description: 'He is a graduate student pursuing management information systems from university of Illinois Chicago ',
  title : 'He is a graduate student pursuing management information systems from university of Illinois Chicago',
  images: [
    {
      imageUrl : 'sidhant.jpeg',
      imageName : 'skhosl4@uic.edu'
    }
  ]

},{ 
name: 'soanlika kapoor',
description: 'She is a graduate student pursuing management information systems from university of Illinois Chicago',
title : 'graduate student',
images: [
{
  imageUrl : 'sonalika.jpeg',
  imageName : ' skapoo23@uic.edu'
}
]

},{ 
name: 'Abhinav tandon',
description: 'He is a graduate student pursuing management information systems from university of Illinois Chicago ',
title : 'graduate student',
images: [
{
  imageUrl : 'abhinav.jpeg',
  imageName : 'atando6@uic.edu'
}
]

}]
  }
  
 
  ngOnInit(): void {
    
   
  
   
    console.log(this.testiomonalBanner)
    this.foodData = [{
      categoryName: 'breakfast',
      categoryData: [{
        name: "Sandwich",
        mrp: "100",
        quantity: 1
        },
        {
         name: "Bread Jam",
         mrp: "200",
         quantity: 3
         },{
           name: "Egg Omelete",
           mrp: "300",
           quantity: 2,
           },
           {
             name: "Corn Flakes",
             mrp: "400",
             quantity: 5,
             },
             {
               name: "Chicken Burger",
               mrp: "500",
               quantity: 0
               }]
    }, {
    categoryName: 'Dinner',
      categoryData: [{
        name: "Sandwich",
        mrp: "100",
        quantity: 1
        },
        {
         name: "Bread Jam",
         mrp: "200",
         quantity: 3
         },{
           name: "Egg Omelete",
           mrp: "300",
           quantity: 2,
           },
           {
             name: "Corn Flakes",
             mrp: "400",
             quantity: 5,
             },
             {
               name: "Chicken Burger",
               mrp: "500",
               quantity: 0
               }]
    }, {
    categoryName: 'Dessert',
      categoryData: [{
        name: "Sandwich",
        mrp: "100",
        quantity: 1
        },
        {
         name: "Bread Jam",
         mrp: "200",
         quantity: 3
         },{
           name: "Egg Omelete",
           mrp: "300",
           quantity: 2,
           },
           {
             name: "Corn Flakes",
             mrp: "400",
             quantity: 5,
             },
             {
               name: "Chicken Burger",
               mrp: "500",
               quantity: 0
               }]
    }, { categoryName: 'lunch',
    categoryData: [{
      name: "Sandwich",
      mrp: "100",
      quantity: 1
      },
      {
       name: "Bread Jam",
       mrp: "200",
       quantity: 3
       },{
         name: "Egg Omelete",
         mrp: "300",
         quantity: 2,
         },
         {
           name: "Corn Flakes",
           mrp: "400",
           quantity: 5,
           },
           {
             name: "Chicken Burger",
             mrp: "500",
             quantity: 0
             }]
  }
  ]
    this.foodItemData = {"Breakfast" :[ {
       name: "Sandwich",
       mrp: "100",
       quantity: 1
       },
       {
        name: "Bread Jam",
        mrp: "200",
        quantity: 3
        },{
          name: "Egg Omelete",
          mrp: "300",
          quantity: 2,
          },
          {
            name: "Corn Flakes",
            mrp: "400",
            quantity: 5,
            },
            {
              name: "Chicken Burger",
              mrp: "500",
              quantity: 0
              }],
              "Bevarages" :[ {
                name: "ColdDrink",
                mrp: "100",
                quantity: 2
                },
                {
                 name: "Cold Cofee",
                 mrp: "200",
                 quantity: 2
                 },{
                   name: "pastorized milk",
                   mrp: "300",
                   quantity: 2
                   },
                   {
                     name: "Ice Tea",
                     mrp: "400",
                     quantity: 2
                     },
                     {
                       name: "Donots",
                       mrp: "500",
                       quantity: 2
                       }],
                       "Soups" :[ {
                        name: "hot n sour",
                        mrp: "100",
                        quantity: 2
                        },
                        {
                         name: "Tomato",
                         mrp: "200",
                         quantity: 2
                         },{
                           name: "Manchow",
                           mrp: "300",
                           quantity: 2
                           },
                           {
                             name: "sweet corn",
                             mrp: "400",
                             quantity: 2
                             },
                             {
                               name: "spanish corn",
                               mrp: "500",
                               quantity: 2
                               }],
                               "Deserts" :[ {
                                name: "hot n sour",
                                mrp: "100",
                                quantity: 2
                                },
                                {
                                 name: "Tomato",
                                 mrp: "200",
                                 quantity: 2
                                 },{
                                   name: "Manchow",
                                   mrp: "300",
                                   quantity: 2
                                   },
                                   {
                                     name: "sweet corn",
                                     mrp: "400",
                                     quantity: 2
                                     },
                                     {
                                       name: "spanish corn",
                                       mrp: "500",
                                       quantity: 2
                                       }],
                                       
     }

    
    this.keys = Object.keys(this.foodItemData);
    // this.keys = ['Breakfast','dinner','snacks'];

    this.pages = this.foodData.length;
    this.pagesCount =  Array(Math.ceil(this.pages/2)).fill(0);;
    //this.activateClass(  this.keys[0]) ;
     this.key = this.keys;
     if(this.keys.length <= 4)
       this.nextbtnshow=false;     
  }
  
  scrollTo(id) {
    var targetid = "#" + id;
   var d =   $(targetid);
   d[0].scrollIntoView({behavior: "smooth", block: "start"});
   }
  
   sidebarToggle(id) {
    $('#'+id).toggleClass("intro");
    $('.main-nav').toggleClass("open");
    }

    abc() {
      console.log("VFvdfv");
     }
    
     public loadScript(url: string) {
      const body = <HTMLDivElement> document.body;
      const script = document.createElement('script');
      script.innerHTML = '';
      script.src = url;
      script.async = false;
      script.defer = true;
      script.setAttribute('data-complete', 'completeCallback');
  
  script.setAttribute('data-cancel', 'cancelCallback');
  
  script.setAttribute('data-error', 'errorCallback');
      body.appendChild(script);
    }
    checkCartQuantity = (item) => {
      if(item.quantity === 0 ){
        Swal.fire({
          type: 'error',
          title: 'Error Occured!!',
          html: 'Insufficeint quantity',
          animation: false,
  }); 
      }
      else {
        item.quantity--;
        Swal.fire({
          type: 'success',
          title: 'congrats',
          html: 'order placed',
          animation: false,
  }); 
      }
    }

   
  scroller() {
 var $goToTop = $('#back-to-top');
     $goToTop.hide();
     $(window).scroll(function(){
       if ($(window).scrollTop()>100) $goToTop.fadeIn();
       else $goToTop.fadeOut();
     });
   $goToTop.on("click", function () {
     $('body,html').animate({scrollTop:0},1000);
     return false;
   });
}
getClassByValue(item,i) {
  if(i == 0 ){
    
    $('.tab-content #tab-'+item).addClass('active show');
return "hightlights";
  }
  else {
    return '';
  }
  
}

abcd(i){
var cd =  this.keys.slice(this.first,this.last);
 var dx = cd.slice(i,i+1)[0];
  if(this.tab == dx ) {
   return 'active';
  }
  else return 'xyz';
 
}
activateClass(event) {
 var a = $('.tab-content .tab-pane.fade.active.show');
 a.removeClass('active show');
 var navlink = $('.nav-item .nav-link.active ')
 navlink.removeClass('active');
 console.log(a);
 }
nextcat() {
  this.prevbtnshow =  this.keys.slice(this.first,this.last).length == 4;
  this.first = this.first +4;
  this.last = this.last +4;
  this.nextbtnshow = this.keys.slice(this.first,this.last).length == 4;
  this.tab =  this.keys.slice(this.first,this.last)[0].trim();
  var a = $('.tab-content .tab-pane.fade.active.show');
 a.removeClass('active show');
 var navlink = $('.nav-item .nav-link.active ')
 navlink.removeClass('active');

  $('#tab-'+this.tab.split(' ').join('')).addClass('active show');
}

prevcat() {
  this.last = this.last -(this.last-this.first);
   this.first = this.first -4;
   this.prevbtnshow = this.first != 0 ? true:false;
   this.nextbtnshow = this.keys.slice(this.first,this.last).length == 4;
   this.tab =  this.keys.slice(this.first,this.last)[0].trim();
   var a = $('.tab-content .tab-pane.fade.active.show');
 a.removeClass('active show');
 var navlink = $('.nav-item .nav-link.active ')
 navlink.removeClass('active');
 $('#tab-'+this.tab.split(' ').join('')).addClass('active show');

}

}
