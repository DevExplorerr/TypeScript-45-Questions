function make_album(artist: string, title: string, tracks?: number): any {

    const album: any = {
        artist: artist,
        title: title
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

const album1 = make_album("Artist 1", "Album 1");
const album2 = make_album("Artist 2", "Album 2", 10);
const album3 = make_album("Artist 3", "Album 3");

console.log(album1);
console.log(album2);
console.log(album3);


