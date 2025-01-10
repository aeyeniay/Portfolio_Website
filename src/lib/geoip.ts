import { Reader, City } from '@maxmind/geoip2-node'
import path from 'path'

let reader: Reader | null = null

export async function initGeoIP() {
    if (!reader) {
        reader = await Reader.open(path.join(process.cwd(), 'database/GeoLite2-City.mmdb'))
    }
}

export async function getLocationFromIP(ip: string) {
    if (!reader) await initGeoIP()
    
    try {
        const response = await reader!.city(ip)
        return {
            countryCode: response.country.isoCode,
            countryName: response.country.names.en,
            city: response.city?.names.en,
            latitude: response.location.latitude,
            longitude: response.location.longitude
        }
    } catch (error) {
        console.error('Error getting location from IP:', error)
        return null
    }
} 