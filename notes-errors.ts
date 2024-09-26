
page.locator('tr')
.filter(page.locator("[text='Apeirian8']")) - or -
//Get by text doesn't work with filter?
.filter(page.getByText('Apeirian8'))

//