<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userPermissions = [
            'create_user',
            'read_user',
            'update_user',
            'delete_user',
        ];

        $taskPermissions = [
            'create_task',
            'read_task',
            'update_task',
            'delete_task',
        ];

        $allPermissions = [...$userPermissions, ...$taskPermissions];

        foreach ($allPermissions as $permission) {
            Permission::create([
                'name' => $permission,
            ]);
        }

        Role::create([
            'name' => 'admin',
        ])->givePermissionTo($allPermissions);

        Role::create([
            'name' => 'user',
        ])->givePermissionTo($taskPermissions);

        User::create([
            'name' => 'Lhoopa Admin',
            'email' => 'admin@lhoopa.com',
            'password' => bcrypt('adminlhoopa2023'),
        ])->assignRole('admin');
    }
}
