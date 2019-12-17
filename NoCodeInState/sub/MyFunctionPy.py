import boto3
ddb = boto3.client("dynamodb")

def handler(event, context):
    
    try:
        data = ddb.get_item(
            TableName="Shop",
            Key={
                'Color': {
                    'S': "123"
                }
            }
        )
    except BaseException as e:
        print(e)
        raise(e)
    
    return {"message": "Successfully executed"}
