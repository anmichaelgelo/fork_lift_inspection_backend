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
            <td><code>/inspections</code></td>
            <td>None</td>
            <td>Get all records of forklift inspections</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/inspections</code></td>
            <td><a href="#post-checklist">Check here</a></td>
            <td>Creat a new inspection record</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/inspections/:id</code></td>
            <td><code>* id</code></td>
            <td>Shows a single inspection details</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td><code>/inspections/:id</code></td>
            <td><a href="#post-checklist">Check here</a></td>
            <td>Updates a single inspection details</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td><code>/inspections/:id</code></td>
            <td><code>* id</code></td>
            <td>deletes a single inspection details</td>
        </tr>
    </tbody>
</table>

<hr />

### Create/Update an inspection record
<code id="post-checklist"></code>
