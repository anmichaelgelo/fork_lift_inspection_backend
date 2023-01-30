# Forklift Inspection
### API URI: https://forklift-inspection-backend.vercel.app

## API ROUTES
### Daily Checklist
<table>
    <thead>
        <th>Method</th>
        <th>Route</th>
        <th>Parameters</th>
        <th>Short Description</th>
    <thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td><code>/daily_checklist</code></td>
            <td>None</td>
            <td>Get all records of Daily Checklist</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/daily_checklist</code></td>
            <td><a href="#post-checklist">Check here</a></td>
            <td>Creat a new daily checklist record</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/daily_checklist/:id</code></td>
            <td><code>* id</code></td>
            <td>Shows a single checklist details</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td><code>/daily_checklist/:id</code></td>
            <td><a href="#post-checklist">Check here</a></td>
            <td>Updates a single checklist details</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td><code>/daily_checklist/:id</code></td>
            <td><code>* id</code></td>
            <td>deletes a single checklist details</td>
        </tr>
    </tbody>
</table>

<hr />

### Items
<table>
    <thead>
        <th>Method</th>
        <th>Route</th>
        <th>Parameters</th>
        <th>Short Description</th>
    <thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td><code>/items</code></td>
            <td>None</td>
            <td>Get all records of Items</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/items</code></td>
            <td><code>* name</code></td>
            <td>Create a new record of Item</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/items/:id</code></td>
            <td><code>* id</code></td>
            <td>Get the record of Item details</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td><code>/items/:id</code></td>
            <td><code>* id</code></td>
            <td>Updates the record of Item details</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td><code>/items/:id</code></td>
            <td><code>* id</code></td>
            <td>Deletes the record of Item details</td>
        </tr>
    </tbody>
</table>
<hr />

## Create/Update a daily checklist record
<code id="post-checklist">
{"daily_checklist": {
        "truck_no": 123,
        "building_no": 321,
        "shift": "",
        "is_internal_combustion": false,
        "is_electric": false,
        "hour_meter": {
            "start": "",
            "end": "",
            "total_hours": ""
        },
        "operated_by": "Robert Downey",
        "supervised_by": "Mr. Unknown"
    },
    "defective_items": {
        "items": ["item_1", "item_2", "item_3", "item_4"],
        "details": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
    }}
</code>
