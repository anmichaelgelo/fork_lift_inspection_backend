# Forklift Inspection
### API URI: https://forklift-inspection-backend.vercel.app

## API ROUTES
### Inspection
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
            <td><code>/api/v1/inspections</code></td>
            <td>None</td>
            <td>Get all records of forklift inspections</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/v1/inspections</code></td>
            <td><a href="#post-checklist">Check here</a></td>
            <td>Creat a new inspection record</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/api/v1/inspections/:id</code></td>
            <td><code>* id</code></td>
            <td>Shows a single inspection details</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td><code>/api/v1/inspections/:id</code></td>
            <td><a href="#post-checklist">Check here</a></td>
            <td>Updates a single inspection details</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td><code>/api/v1/inspections/:id</code></td>
            <td><code>* id</code></td>
            <td>deletes a single inspection details</td>
        </tr>
    </tbody>
</table>

<hr />

### Create/Update an inspection record by passing these parameters
<code id="post-checklist">{
    "name": "testing 1",
    "lift": "testing",
    "hours": "13000",
    "date": "2023-02-08",
    "tires": true,
    "horn": true,
    "battery": true,
    "controls": false,
    "overhead_guard": false,
    "hydraulics": false,
    "charger": true,
    "fall_arrest": false,
    "is_load_plate_displayed": true,
    "is_operators_manual_present": true,
    "is_forklift_clean": false,
    "deficiencies_present": "12313123123",
    "brakes": true,
    "steering": false
}</code>
