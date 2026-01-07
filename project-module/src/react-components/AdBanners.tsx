

  const AdBanners = async ()  => {
        const response = await fetch("src/data-server/adBanner.json")
        if (!response.ok) {
            throw new Error("something is down")
        } 
        return response.json()


}