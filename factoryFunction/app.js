const makeColor = function(r,g,b){
    const color = {r,g,b}
    color.rgb = function(){
        const {r, g, b} = this
        return `rgb(${r}, ${g}, ${b})`
    }
    return color
}