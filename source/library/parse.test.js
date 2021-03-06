import Chai from "chai"
import {parseYoutubeId} from "./parse.js"

Chai.expect(parseYoutubeId("https://youtu.be/pfZAmkshOXo")).to.equal("pfZAmkshOXo")
Chai.expect(parseYoutubeId("https://www.youtube.com/watch?v=7oH1n3gsGlk")).to.equal("7oH1n3gsGlk")
Chai.expect(parseYoutubeId("https://www.youtube.com/watch?v=ObwQpmF_F9Y&ab_channel=Camzoin")).to.equal("ObwQpmF_F9Y")
Chai.expect(parseYoutubeId("https://youtu.be/t0f1K7bXnko (includes narration; recommend 720p+ or will be too blurry to see characters)")).to.equal("t0f1K7bXnko")
Chai.expect(parseYoutubeId("is it okay if my video is longer than 5 minutes https://youtu.be/TGlgNDDWzgw")).to.equal("TGlgNDDWzgw")
