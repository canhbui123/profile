function initMap() {

    var myLatLng = { lat: 10.949197, lng: 106.827159 }; // 10 Huỳnh Văn Nghệ, Bửu Long, Thành phố Biên Hòa, Đồng Nai

    var map = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 25,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '10 Huỳnh Văn Nghệ, Bửu Long, Thành phố Biên Hòa, Đồng Nai'
    });
}