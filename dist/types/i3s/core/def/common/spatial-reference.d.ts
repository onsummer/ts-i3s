/**
 * @example
 *  ``` json
 *  {
 *    "wkid": 103142,
 *    "latestWkid": 6565,
 *    "vcsWkid": 105703,
 *    "latestVcsWkid": 6360
 *  }
 *  ```
 *
 * @example
 *  ``` json
 *  {
 *    "wkt": "PROJCS[\"Austria_Central_Zone\",GEOGCS[\"GCS_MGI_Ferro\",DATUM[\"D_MGI\",SPHEROID[\"Bessel_1841\",6377397.155,299.1528128]],PRIMEM[\"Ferro\",-17.66666666666667],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"False_Easting\",0.0],PARAMETER[\"False_Northing\",-5000000.0],PARAMETER[\"Central_Meridian\",13.33333333333333],PARAMETER[\"Scale_Factor\",1.0],PARAMETER[\"Latitude_Of_Origin\",0.0],UNIT[\"Meter\",1.0]]"
 *  }
 *  ```
 */
export default class SpatialReference {
    latestVcsWkid?: number;
    latestWkid?: number;
    vcsWkid?: number;
    wkid?: number;
    wkt?: string;
}
