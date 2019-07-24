import Typography from "typography"
const typography = new Typography({
    baseFontSize: '20px',
    baseLineHeight: 1.666,
    scaleRatio: 3,
    headerFontFamily: ['Paytone One', 'Noto Sans SC', 'Helvetica', 'sans-serif'],
    bodyFontFamily: ['Raleway', 'Noto Sans SC', 'georgia', 'serif'],
    googleFonts: [
        {
            name: 'Paytone One',
            styles: [
                '400',
            ],
        },
        {
            name: 'Raleway',
            styles: [
                '400',
            ],
        },
        {
            name: 'Noto Sans SC',
            styles: [
                '400',
                '600',
            ],
        },
    ]        
})
export const { scale, rhythm, options } = typography
export default typography