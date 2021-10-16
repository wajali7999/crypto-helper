from django.shortcuts import render
from django.http import JsonResponse
from coinbase.wallet.client import Client
import requests, json

# Create your views here.

def getPricesView(request):
    client = Client('d6oJ5Jub6D1uCf6i', 'uDfwi6BJ2a3VwqaZ1OcdPzSebVTU8o1C')

    btc_buy = client.get_buy_price(currency_pair = 'BTC-USD')
    eth_buy = client.get_buy_price(currency_pair = 'ETH-USD')

    btc_sell = client.get_sell_price(currency_pair = 'BTC-USD')
    eth_sell = client.get_sell_price(currency_pair = 'ETH-USD')


    btc_url = "https://api.bitfinex.com/v1/pubticker/btcusd"
    eth_url = "https://api.bitfinex.com/v1/pubticker/ethusd"
    btc_response = requests.get(btc_url).json()
    eth_response =requests.get(eth_url).json()

    data = {
        'Coinbase': {
            'BTC': {
                'buy': btc_buy.amount,
                'sell': btc_sell.amount
            },
            'ETH': {
                'buy': eth_buy.amount,
                'sell': eth_sell.amount
            }
        },
        'Bitfinex': {
            'BTC': {
                'buy': btc_response.get('ask'),
                'sell': btc_response.get('bid')
            },
            'ETH': {
                'buy': eth_response.get('ask'),
                'sell': eth_response.get('bid')
            }
        }
    }
    
    response = JsonResponse(data)
    response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"

    return response
