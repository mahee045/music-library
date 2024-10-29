const library = {
       tracks: { t01: { id: "t01",
                        name: "Code Monkey",
                        artist: "Jonathan Coulton",
                        album: "Thing a Week Three" },
                 t02: { id: "t02",
                        name: "Model View Controller",
                        artist: "James Dempsey",
                        album: "WWDC 2003"},
                 t03: { id: "t03",
                        name: "Four Thirty-Three",
                        artist: "John Cage",
                        album: "Woodstock 1952"}
               },
       playlists: { p01: { id: "p01",
                           name: "Coding Music",
                           tracks: ["t01", "t02"]
                         },
                    p02: { id: "p02",
                           name: "Other Playlist",
                           tracks: ["t03"]
                         }
                  }
     };
     
     
     /////////////////////////////
     // FUNCTIONS TO IMPLEMENT:
     /////////////////////////////
     
     
     // prints a list of all playlists, in the form:
     // p01: Coding Music - 2 tracks
     // p02: Other Playlist - 1 tracks
     
     
     /// Function to print a list of all playlists
     const printPlaylists = function() {
            for (let id in library.playlists) {
              let playlist = library.playlists[id];
              let trackCount = playlist.tracks.length;
            
              console.log(playlist.id + ": " + playlist.name + " - " + trackCount + " tracks");
            }
          }
          
          // Example call to the function
          printPlaylists(); // Call to print all playlists
          
     
     
     
     
     // prints a list of all tracks, using the following format:
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     // t03: Four Thirty-Three by John Cage (Woodstock 1952)
     const printTracks = function() {
            for (let id in library.tracks) {
              let track = library.tracks[id]; // Access the track details using the ID
              // Print the track information
              console.log(track.id + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
            }
          }
          
          // Example call to the function
          printTracks(); // Call to print all tracks
          
     
     
     
     
     // prints a list of tracks for a given playlist, using the following format:
     // p01: Coding Music - 2 tracks
     // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
     // t02: Model View Controller by James Dempsey (WWDC 2003)
     const printPlaylist = function(playlistId) {
            // Access the specific playlist using the playlistId
            let playlist = library.playlists[playlistId];
          
            // Print the playlist information
            console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
          
            // Loop through the tracks in the playlist
            for (let i = 0; i < playlist.tracks.length; i++) {
              let trackId = playlist.tracks[i]; // Get the track ID from the playlist
              let track = library.tracks[trackId]; // Access the track details using the ID
              // Print the track information
              console.log(trackId + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
            }
          }
      // Example calls to the function
     printPlaylist("p01"); // Call for the "Coding Music" playlist
     printPlaylist("p02"); // Call for the "Other Playlist"
        
     
     
     
     
     // adds an existing track to an existing playlist
     const addTrackToPlaylist = function(trackId, playlistId) {
            // Check if the track exists
            if (!library.tracks[trackId]) {
              console.log("Track not found!");
              return;
            }
          
            // Check if the playlist exists
            if (!library.playlists[playlistId]) {
              console.log("Playlist not found!");
              return;
            }
          
            // Access the playlist
            let playlist = library.playlists[playlistId];
          
            // Check if the track is already in the playlist
            if (playlist.tracks.includes(trackId)) {
              console.log("Track already in the playlist!");
            } else {
              // Add the track to the playlist
              playlist.tracks.push(trackId);
              console.log("Track added to playlist!");
            }
          }
          
          // Example Calls:
          
          // Adding a new track to a playlist
          addTrackToPlaylist("t03", "p01"); // Adds "t03" (Four Thirty-Three) to "p01" (Coding Music)
          
          //  track that's already in the playlist
          addTrackToPlaylist("t01", "p01"); // "t01" is already in "p01"
          
          //add a non-existing track
          addTrackToPlaylist("t05", "p01"); // t05 doesn't exist in the library
          
          // add a track to a non-existing playlist
          addTrackToPlaylist("t02", "p03"); // p03 doesn't exist in the library
          
     
     
     
     
     // generates a unique id
     // (already implemented: use this for addTrack and addPlaylist)
     const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
     }
     
     
     
     
     // adds a track to the library
     const addTrack = function(name, artist, album) {
            const addTrack = function(name, artist, album) {
                  
                   let trackId = generateUid();
                
                   let newTrack = {
                     id: trackId,       // The unique ID for the track
                     name: name,        // The name of the track passed as a parameter
                     artist: artist,    // The artist of the track passed as a parameter
                     album: album       // The album of the track passed as a parameter
                   };
                
                  
                   library.tracks[trackId] = newTrack;
                
                  
                   console.log("Track added: ", newTrack);
                 }
                
                 // Example call
                 addTrack("New Song", "New Artist", "New Album");
                
     }
     
     
     
     
     // adds a playlist to the library
     const addPlaylist = function(name) {
            let playlistId = generateUid();
            let newPlaylist = { id: playlistId, name: name, tracks: [] };
            library.playlists[playlistId] = newPlaylist;
            console.log("Playlist added: ", newPlaylist);
          }
          
          // Example calls
          addPlaylist("Coding Music");
          addPlaylist("My Favorite Songs");
          
     
     
     
     
     // STRETCH:
     // given a query string string, prints a list of tracks
     // where the name, artist or album contains the query string (case insensitive)
     // tip: use "string".search("tri")
     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
     // Given a query string, prints a list of tracks where the name, artist, or album contains the query string (case insensitive)
     const printSearchResults = function(query) {
            // Convert query to lowercase for case-insensitive search
            const lowerCaseQuery = query.toLowerCase();
          
            // Loop through all tracks in the library
            for (let trackId in library.tracks) {
              let track = library.tracks[trackId];
          
              // Check if the track name, artist, or album contains the query
              if (track.name.toLowerCase().includes(lowerCaseQuery) ||
                  track.artist.toLowerCase().includes(lowerCaseQuery) ||
                  track.album.toLowerCase().includes(lowerCaseQuery)) {
                
                console.log(trackId + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
              }
            }
          }
          
          // Example calls
          printSearchResults("Code"); // Should match "Code Monkey"
          printSearchResults("Dempsey"); // Should match "Model View Controller"
          printSearchResults("Woodstock"); // Should match "Four Thirty-Three"
          
     