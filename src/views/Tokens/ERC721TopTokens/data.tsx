function createData(token: string, transfersH: number, transfersD: number) {
  return { token, transfersH, transfersD }
}

export const rows = [
  createData('Fantums', 2982, 14909),
  createData('Mugambo Diamond', 408, 408),
  createData('ZooCoin Community NFT', 272, 902),
  createData('MARS NFT', 194, 656),
  createData('ShibaPunks', 132, 246),
  createData('Gantom Stone', 127, 402),
  createData('MugamboPaper', 113, 113),
  createData('Syfin_NFT', 87, 315),
  createData('Mugambo Waifus', 86, 584),
  createData('Mugambo MoonCats', 60, 72),
  createData('PaintSwap Official NFTs', 56, 17),
  createData('MugamboTest', 43, 10),
  createData('ZooCoin NFT', 34, 23),
  createData('MugamboMoons', 30, 11),
].sort((a, b) => (a.transfersH > b.transfersH ? -1 : 1))

export const columns = ['Rank', 'Token', 'Transfers (24H)', 'Transfers (7D)']
export const totalERCToken = '688,468'
