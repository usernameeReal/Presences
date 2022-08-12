const presence = new Presence({
    clientId: "1007587237355065364",
  }),
  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused",
  });
presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "dank",

    details: window.vmName ? `In a VM: ${window.vmName}` : "Picking a VM",
    state: "dank-vm.xyz",
  };
  if (presenceData.details) presence.setActivity(presenceData);
  else presence.setActivity();
});
