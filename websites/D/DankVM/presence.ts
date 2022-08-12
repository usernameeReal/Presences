const presence = new Presence({
    //The client ID of the Application created at https://discordapp.com/developers/applications
    clientId: "1007587237355065364"
    }),
    //You can use this to get translated strings in their browser language
    strings = presence.getStrings({
      play: "presence.playback.playing",
      pause: "presence.playback.paused"
    });
    presence.on("UpdateData", async () => {
        /*UpdateData is always firing, and therefore should be used as your refresh cycle, or `tick`. This is called several times a second where possible.
      
          It is recommended to set up another function outside of this event function which will change variable values and do the heavy lifting if you call data from an API.*/
      
        const presenceData: PresenceData = {
          //The large image on the presence. This can be a key of an image uploaded on the Discord Developer Portal - Rich Presence - Art Assets, or a URL to an image
          largeImageKey: "dank",

           //The upper section of the presence text
          details: window.vmName ? `In a VM: ${window.vmName}` : "Picking a VM",
          //The lower section of the presence text
          state: "dank-vm.xyz",
        };
        //Update the presence with all the values from the presenceData object
        if (presenceData.details) presence.setActivity(presenceData);
        //Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name
        else presence.setActivity();
      });