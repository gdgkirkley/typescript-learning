// Instructions to other class on how they can be an argument to addMArker
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  getMarkerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(
    divId: string,
    zoomLevel: number,
    centerLatitude: number,
    centerLongitude: number
  ) {
    this.googleMap = new google.maps.Map(document.querySelector(divId), {
      zoom: zoomLevel,
      center: { lat: centerLatitude, lng: centerLongitude }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.getMarkerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
