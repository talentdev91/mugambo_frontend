function createData(token: string, transfersH: number, transfersD: number) {
  return { token, transfersH, transfersD }
}

export const rows = [
  createData('Fantums', 2982, 14909),
  createData('Mugambo Diamond', 408, 408),
  createData('ZooCoin Community NFT', 272, 902),
  createData('MARS NFT', 194, 656),
  createData('ShibaPunks', 132, 246),
].sort((a, b) => (a.transfersH > b.transfersH ? -1 : 1))

export const columns = ['Action', 'Api-Key Token', 'Created']
export const totalERCToken = '688,468'
