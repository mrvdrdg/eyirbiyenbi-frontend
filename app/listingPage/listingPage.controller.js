class ListingPageController {
  constructor($http, ListingModel, $state, $stateParams,UserModel) {
    this.$http = $http;
    this.ListingModel = ListingModel;
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.UserModel = UserModel;
    this.shared_room_type = {
      'shared_room' : 'Shared Room',
      'entire_house' : 'Entire House',
      'private_room' :  'Private Room'
    }

  }

  $onInit() {


    this.ListingModel.getSelectedListing(this.$stateParams.id)
    .then((response)=> {
      this.listing = response.data
      this.UserModel.getUser(this.listing.user_id)
        .then((response)=>{
          this.user = response.data;
        });
    })
  }
  getUserName(){
    return this.user.first_name + " " + this.user.laat_name
  }
  getSharedRoomType(){
    return new Array(listing.bed_capacity);
  }
  goToUserPage(listing){
    this.$state.go('userPage',{'id':listing.user_id})
   }
  }
export default ListingPageController;
