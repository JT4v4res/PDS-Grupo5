import pdfquery
import pandas as pd
import re

FILE = 'pdfs/oferta-2023-1.pdf'
pdf = pdfquery.PDFQuery(FILE)
pdf.load()
# pdf.tree.write('pdfXML.xml', pretty_print = True)
# employer_name = pdf.pq('LTTextLineHorizontal:overlaps_bbox("98.4, 512.147, 143.182, 519.034")').text()
# print(employer_name)
text_elements = pdf.pq('LTRect')

# Extract the text from the elements
text = [t.text for t in text_elements]

print(text_elements)